let socket = io();
let chatBox = document.getElementById('chat-box-msg1');
socket.on('connect', () => {
    console.log("client connected via sockets");

})

/*
let newUsr = document.createElement('li');
    newUsr.innerHTML = "new User has joined the chat";
    chatBox.appendChild(newUsr);
*/
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
    let submitButton = document.getElementById('send-button');

    submitButton.addEventListener('click', () => {
        let name = document.getElementById('name-input').value;
        let msg = document.getElementById('msg-input').value;

        chatObj = {
            'name': name,
            'msg': msg
        }

        socket.emit('chatMessage', chatObj);
    })
})


/* 
let socket = io();
let chatBox = document.getElementById('chat-box-msg1');
socket.on('connect', () => {
    console.log("client connected via sockets");

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
    let submitButton = document.getElementById('send-button');
    let msgBox = document.getElementById('msg-input');
    msg.addEventListener('change', () => {
        socket.emit('userTyping');
    });


    submitButton.addEventListener('click', () => {
        let name = document.getElementById('name-input').value;
        let msg = msgBox.value;

        chatObj = {
            'name': name,
            'msg': msg
        }
        
        socket.emit('chatMessage', chatObj);
    })

    msgBox.onkeypress = () => {
        console.log('typing');
        socket.emit('userTyping');
    }
})
*/