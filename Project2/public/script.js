let socket = io();
// leaves variables
let filenames = ["leaf1.png", "leaf2.png", "leaf3.png", "leaf4.png"];
let leaves = [];
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
    let nameloc = Math.random() * window.innerWidth;
    let qouteloc = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    }
    if (submit) {
        formDiv.style.display = "none";
    }
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        username = document.getElementById('username').value;
        quote = document.getElementById('quote').value;

        nameData = {
            name: username,
            nameloc: nameloc
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
    })

})

socket.on('addLeaf', (data) => {
    console.log(data);
    leaves.push(data);
    newLeaf();
})

function newLeaf() {
    console.log("here");
    console.log(leaves);
}


/* <script >
function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "500px";
document.getElementById('i1').style.top= "100px";
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=1; // Change this step value
//alert("Hello");
var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
if(y < 400 ){y= y +step;
document.getElementById('i1').style.top= y + "px"; // vertical movment
}else{
if(x < 800){x= x +step;
document.getElementById('i1').style.left= x + "px"; // horizontal movment
}
}
//////////////////////
}

function timer(){
disp();
my_time=setTimeout('timer()',10);
}
</script>

*/