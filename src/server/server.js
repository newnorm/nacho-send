const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)
// const api = require('./routes')
// const cors = require('cors')
// app.use(cors())
// app.use('/api', api)

const port = 8000
// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

io.on('connection', (socket) => {
  socket.emit('your id', socket.id)
  socket.on('send message', (body) => {
    io.emit('message', body)
  })
  socket.on('is typing', (typer) => {
    // io.emit('typer', typer)
    socket.broadcast("broadcast", typer + ' is typing...')
  })
})
//접속 아이디를 알려주고, 메시지를 보낸다

server.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
