const io = require('socket.io-client')
const io_client = io.connect('http://localhost:8001')
io_client.emit('set-events' ,['message'])

io_client.emit('push-updates' ,[
    {id: 1 ,name: 'Ahmed Hesham' ,age: 25},
    {id: 2 ,name: 'Shouk Hesham' ,age: 23},
    {id: 3 ,name: 'Helal Hesham' ,age: 21},
    {id: 4 ,name: 'Ali Hesham' ,age: 15}
])
io_client.on('message' ,message => console.log(`Message-Bus say : ${message}`))