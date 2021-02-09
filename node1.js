const io = require('socket.io-client')
const io_client = io.connect('http://localhost:8001')
io_client.emit('set-events' ,['message' ,'updates'])

io_client.on('message' ,message => console.log(`Message-Bus say : ${message}`))

io_client.on('updates' ,updates => {
    console.log('Message-Bus updates:')
    console.log(updates)
})