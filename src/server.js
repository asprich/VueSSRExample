import express from "express";
import fileStream from "fs";

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
    const htmlText = fileStream.readFileSync('./dist/index.html', 'utf-8');
    response.end(htmlText);
});

//Set the port and start the server
const port = 8000;
server.listen(port, () => console.log(`Listening on port ${port}`));