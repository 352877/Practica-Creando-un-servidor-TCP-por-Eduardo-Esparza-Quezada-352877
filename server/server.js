const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('\nMensaje recibido desde el cliente:' + data);
        socket.write('Recibido!')
    })

    socket.on('close', () => {
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err) => {
        console.log(err.message)
    })
})

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto', server.address().port)
})
