let width = (window.screen.availWidth) * 0.4;
let height = (window.screen.availHeight) * 0.5;

window.addEventListener('resize', function() {
    window.width = (window.screen.availWidth) * 0.4;
    window.height = (window.screen.availHeight) * 0.5;
    console.log("1: ", window.width, ", ", height);
})