const http = require("http");
//create a server instance
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
         <h1>HTTP Server sample with nodemon</h1>
         <p>The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.</p>
         <h1>Click following link to redirect</h1>
         <ul>
         <li><a href='./home'>Home</a></li>
         <li><a href='./about'>About</a></li>
         <li><a href='./api'>API json</a></li>
         <ul>

       `);
  } else if (req.method === "GET" && req.url === "/home") {
    res.write("<h1>This is a Home Page called.</h1>");
    //end the response
  } else if (req.method === "GET" && req.url === "/about") {
    res.write("<h1>This is a About Page called.</h1>");
  } else if (req.method === "GET" && req.url === "/api") {
    res.write(JSON.stringify([{ name: "Nikita", Class: "PreepBite" }]));
  }

  res.end();
});
server.listen(3000);
console.log("started port");
