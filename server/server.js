const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')

const clientPath = path.join(__dirname, '../client')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(clientPath))

//consol message start server
server.listen(port, () => {
    console.log('Server has been started on port ' + port)
})

// //show
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg)
        io.emit('chat message', msg)
    })
})




