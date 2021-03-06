import express from "express";
import appHandler from "./server-entry";

//Instantiate the server
const server = express();

//Specifing a directory for static files
server.use(express.static("./dist", {
    index: false
}));

//Handle favicon requests
server.get("/favicon.ico", (request,response) => {
    response.status(404).end("Stop hounding me for a fav icon!");
});

//Listen for all (*) requests
server.get("*", (request, response) => {
    appHandler(request)
        .then(html => response.end(html))
        .catch(err => {
            if (err.code === 404)
                response.status(404).end('Page not found')
            else
                response.status(500).end('Internal Server Error')
        });
});

//Set the port and start the server
const port = 8000;
server.listen(port, () => console.log(`Listening on port ${port}`));