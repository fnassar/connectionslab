let socket = io();
let chatBox = document.getElementById('chat-box-msg1');
socket.on('connect', () => {
        console.log("client connected via sockets");

        let data = {
            "name": sessionStorage.getItem('name'),
            "room": sessionStorage.getItem('room')
        }
        socket.emit('userData', data);
    })
    // recieve prev msgs
socket.on('pastMessages', (data) => {
    console.log(data);

    // load prev chats
    for (let i = 0; i < data.oldMessages.length; i++) {
        let msg = document.createElement('li');
        msg.innerHTML = data.oldMessages[i].name + " : " + data.oldMessages[i].msg;
        chatBox.appendChild(msg);
    }
})

socket.on('chatMessage', (data) => {
    console.log(data);
    let msg = document.createElement('li');
    msg.innerHTML = data.name + " : " + data.msg;
    chatBox.appendChild(msg);
})

window.addEventListener('load', () => {
    let username = document.getElementById('user-name');
    console.log(sessionStorage.getItem('name'));
    username.innerHTML = sessionStorage.getItem('name');

    let msgBox = document.getElementById('msg-input');
    let chatForm = document.getElementById('chat-form');

    // e=event
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault(); // stops eg enter to submit
        let name = document.getElementById('name-input').value;
        let msg = document.getElementById('msg-input').value;

        chatObj = {
            'name': name,
            'msg': msg
        }

        socket.emit('chatMessage', chatObj);
    })
    msgBox.addEventListener('keypress', () => {
            console.log('typing');
            socket.emit('userTyping');
        })
        // msgBox.onkeypress = () => {}// old version not going to be always supported
})