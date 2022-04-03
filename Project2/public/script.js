let socket = io();

socket.on('connect', () => {
    console.log("client connected via sockets");

})

window.addEventListener('load', () => {


})

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