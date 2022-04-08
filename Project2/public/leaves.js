let n = 0;
class Leaves {
    constructor(name, x, r, n) {
        this.loc = {
            x: x,
            y: 0
        }
        this.name = name;
        this.r = r; // image size
        this.g = window.innerHeight - window.innerHeight * 0.11; // end of screen
        this.step = {
            x: 0,
            y: 0
        }; // velocity
        this.image = "/images/leaf" + (n) + ".png";
        this.leaf = document.createElement('img'); // create image
        this.div_cont; // create div for leaf

        this.nameTag = document.createElement('p'); // create text tag
        // this.dir = 1; // for qoutes only
        this.end = false;
        this.my_time;
    }
    createElem = () => {
        // get leaes section to add leaves in it
        let section_cont = document.getElementById('main');
        this.div_cont = document.createElement('div');
        this.nameTag.className = "leaf_name";
        this.nameTag.innerHTML = this.name;
        // assign div class name and id
        // this.div_cont.style.top = this.loc.y = 0;
        this.div_cont.className = "leaf_div"; // add format in css
        this.div_cont.style.left = this.loc.x + "px";
        this.div_cont.style.top = '0px';
        // create new image
        this.leaf.src = this.image;
        this.leaf.className = "leaf_image";
        this.leaf.alt = "leaf is falling u want something?";
        // add text to div
        this.div_cont.appendChild(this.leaf);
        this.div_cont.appendChild(this.nameTag);

        // don't add ids too many arguments use array with get class name if needed
        // add leaf div to element
        section_cont.appendChild(this.div_cont);
        // n++;
    }

    reset = () => {
        clearTimeout(this.my_time);
        this.div_cont.style.left = this.loc.x;
        this.div_cont.style.top = this.loc.y = 0;
        document.getElementById("msg").innerHTML = "";
    }

    display = () => {
        if (this.loc.y >= this.g) {
            this.step.y = 0;

            // this.end = true;
        } else {
            this.step.y = 2;
        }
        this.loc.y += this.step.y;
        socket.emit('newPos', this);

        this.div_cont.style.top = this.loc.y + "px";

        this.div_cont.style.left = this.loc.x + "px";
        if (this.end) {
            this.reset();
        }
    }

    timer = () => {
        socket.emit('newPos', n);

        this.my_time = setTimeout(this.timer, 5000);
    }

}