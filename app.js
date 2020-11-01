let express = require("express"),
  http = require("http");

let socketio = require("socket.io");
let cors = require("cors");
let app = express();
app.use(cors());

app.set("port", process.env.PORT || 3000);

// http.createServer(app).listen(app.get("port"), function () {
//   console.log("express server starting :" + app.get("port"));
// });

app.use(function (req, res, next) {
  console.log("첫번째 미들웨어에서 요청을 처리함");

  res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
  res.end(`<h1>Express 서버에서 응답한 결과입니다 :)</h1>`);
});

let server = http.createServer(app).listen(app.get("port"), function () {
  console.log("server starting at port " + app.get("port"));
});

let io = socketio.listen(server);

io.sockets.on("connection", function (socket) {
  console.log("connection info ", socket.request.connection._peername);
  socket.remoteAddress = socket.request.connection._peername.address;
  socket.remotePort = socekt.request.connection._peername.port;
});
console.log("prepared to handle requests from socket io :)");
