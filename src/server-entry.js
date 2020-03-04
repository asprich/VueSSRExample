import fileStream from "fs";
import appStart from "./app-start";

const vueServerRenderer = require("vue-server-renderer");

//Grab the contents of our index file
const htmlTemplate = fileStream
    .readFileSync('./dist/index.html', 'utf-8')
    .replace('<div id="app"></div>','<!--vue-ssr-outlet-->');

//Create an instance of our renderer
var renderer = vueServerRenderer.createRenderer({
    template: htmlTemplate
});


function createVueInstanceAndSetRouterUrl(context) {
    return new Promise((resolve, reject) => {
        //Instantiate the vue instance
        const { vueInstance, router, store } = appStart();

        //Make the vue router aware of the url
        router.push(context.url).catch(err => {
            if (!/NavigationDuplicated/.test(err.name)) 
                console.log(err);
        }); 
            
        //Once a route has been found and the router is ready
        router.onReady(() => {
                //Set the state so it can be passed to the client
                context.rendered = () => {
                    context.state = store.state;
                }

                resolve({ context, vueInstance, router });
            }, 
            reject);
    });
}

function verifyComponentExistsForRoute({ context, vueInstance, router }) {
    return new Promise((resolve, reject) => {
        //Look for matching components
        const matchedComponents = router.getMatchedComponents();

        //If none are found 404
        if (!matchedComponents.length)
            return reject({ code: 404 });

        //Otherwise continue to the next step
        resolve({ context, vueInstance });
    });
}

function renderVueComponentToString({ context, vueInstance }) {
    return new Promise((resolve, reject) => {
        renderer.renderToString(vueInstance, context, (err, html) => {
            if (err)
                reject(err);
            else 
                resolve(html);
        });
    });
}


//Export a request handler
export default request => {
    //Set up a context for the renderer
    const context = { url: request.url };

    //Handle request
    return createVueInstanceAndSetRouterUrl(context)
        .then(verifyComponentExistsForRoute)
        .then(renderVueComponentToString);
}