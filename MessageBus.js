const app = require('express')()
const http = require('http').createServer(app)
const io_server = require('socket.io')(http)

app.get('*', (req, res) => res.send('Socket Server Run'))

// here we use Map DS to create a node for each client then set him listening events
const clients = new Map()

io_server.on('connection', socket => {
    clients.set(socket.id ,[])
    
    socket.on('set-events' ,events => {
        clients.set(socket.id ,events)
    })

    socket.on('push-updates' ,updates => {
        // here we check if the emitter has a listener to message we just notify it by a single message
        if(clients.has(socket.id) && clients.get(socket.id).includes('message')) {
            socket.emit('message' ,'We just going to push your updates for listeners')
        }
        for(let [socket_id ,node_events] of clients.entries()) {
            if (node_events.includes('updates')) {
                socket.broadcast.to(socket_id).emit('updates' ,updates)
            }
        }
    })
})

http.listen(8001, 'localhost', () => console.log('Message-Bus run on http://localhost:8001'))