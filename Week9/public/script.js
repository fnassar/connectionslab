let socket = io();

window.addEventListener('load', () => {
    socket.on('connect', () => {
        console.log("client connected via sockets");

    })
})