let http = require("http");

let server = http.createServer();

// let host = "127.0.0.1";
let port = 3000;

server.listen(port, () => {
  console.log("web server has started at : %d", port);
});

server.on("connection", function (socket) {
  let addr = socket.address();
  console.log("client is connected : %s , %d", addr.address, addr.port);
});

server.on("request", function (req, res) {
  console.log("client requested.");

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>response page</title>
    </head>
    <body>
        <h1>Responses from node js server. :)</h1>
    </body>
  </html>
  `);
  res.end();
});

server.on("close", function () {
  console.log("server closing...");
});
