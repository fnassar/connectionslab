let socket = io('/input');
// let socket = io('/input');

socket.on('connect', () => {
    console.log("client connected via sockets");

})

window.addEventListener('load', () => {
    //

})