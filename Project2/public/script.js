let socket = io();
// leaves variables
let filenames = ["leaf1.png", "leaf2.png", "leaf3.png", "leaf4.png"];
let leaves = [];
let leavesObj = [];
let quotes = [];
let submit = false;

socket.on('connect', () => {
    console.log("client connected via sockets");

})

window.addEventListener('load', () => {
    let nameForm = document.getElementById('main_form');
    let formDiv = document.getElementById('main_form_div');
    let username;
    let quote;
    let nameData;
    let nameloc;
    let qouteloc;
    if (submit) {
        formDiv.style.display = "none";
    }
    nameForm.addEventListener('submit', (e) => {
        socket.emit('load');
        e.preventDefault();
        username = document.getElementById('username').value;
        quote = document.getElementById('quote').value;
        nameloc = (Math.random() * (window.innerWidth - 50)).toFixed(2);
        console.log(nameloc);
        nameData = {
            name: username,
            nameloc: nameloc,
            n: Math.floor(Math.random() * 4 + 1)
        }
        qouteloc = {
            x: (Math.random() * window.innerWidth).toFixed(2) - 20,
            y: (Math.random() * window.innerHeight).toFixed(2)
        }
        locData = {
            quote: quote,
            quoteloc: qouteloc
        }

        sessionStorage.setItem('name', username);
        // sessionStorage.setItem('room', quote);

        // nameForm.reset();
        document.getElementById('main_title').style.marginBottom = "15vh";
        formDiv.style.display = "none";
        submit = true;

        socket.emit('newLeaf', nameData);
        for (let i = 0; i < leavesObj.length; i++) {
            leavesObj[i].display();
        }
    })
})

socket.on('addLeaf', (data) => {
    console.log(data);
    leaves.push(data);
    newLeaf();
})
socket.on('newPos', (obj) => {
    console.log("update");
    // debugger;
    console.log(n);
    leavesObj[n].display();

})

function newLeaf() {
    console.log("here");
    console.log(leaves[0].name);
    let n = leaves.length - 1;
    let newLeaf = new Leaves(leaves[n].name, leaves[n].nameloc, "5vh", leaves[n].n);
    newLeaf.createElem();
    leavesObj.push(newLeaf);
    let divs = document.getElementsByClassName('leaf_div');
    for (let i = 0; i < leavesObj.length; i++) {
        leavesObj[i].timer();
    }
}