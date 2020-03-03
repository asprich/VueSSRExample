import fileStream from "fs";
import appStart from "./app-start";

const vueServerRenderer = require("vue-server-renderer");

//Grab the contents of our index file
const htmlTemplate = fileStream
    .readFileSync('./dist/index.html', 'utf-8')
    .replace('<div id="app"></div>','<div id="app"><!--vue-ssr-outlet--></div>');

//Create an instance of our renderer
var renderer = vueServerRenderer.createRenderer({
    template: htmlTemplate
});

//Export a request handler
export default (request, responseCallback) => {
    //Set up a context for the renderer
    const context = { url: request.url };

    //Instantiate the vue instance
    const { vueInstance } = appStart();
    
    renderer.renderToString(vueInstance, context, responseCallback);
}