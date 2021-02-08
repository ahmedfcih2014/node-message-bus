const io = require('socket.io-client')
const client_io = io.connect('http://localhost:3086')

client_io.on('listening' ,data => console.log(data))
client_io.on('message' ,message => console.log(`Socket Server Say : ${message}`))