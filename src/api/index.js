import openSocket from 'socket.io-client'
const  socket = openSocket('http://127.0.0.1:8000')

export const subscribeToTimer = (cb) => {
    socket.on('timer', timestamp => cb(timestamp));
    socket.emit('subscribeToTimer', 1000);
}