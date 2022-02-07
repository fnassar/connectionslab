window.addEventListener('load', function() {
    //hover cards
    let cards = document.getElementsByClassName('img');
    let texts = document.getElementsByClassName('text');

    for (let i = 0; i < cards.length; i++) {
        cards[i].onmouseover = e => {
            console.log("mouse in", i);
            texts[i + 1].style.display = "flex";
        }
        texts[i + 1].onmouseover = e => {
            console.log("mouse in", i);
            texts[i + 1].style.display = "flex";
        }
        cards[i].onmouseleave = e => {
            console.log("mouse out", i + 1);
            texts[i + 1].style.display = "none";
        }
        texts[i + 1].onmouseleave = e => {
            console.log("mouse out", i + 1);
            texts[i + 1].style.display = "none";
        }

    }

    //inputs
    let input_name = this.document.getElementById('name');
    let input_link = this.document.getElementById('link');

    input_name.addEventListener('change', function(e1) {
        let name = e1.target.value;
        input_link.addEventListener('change', function(e2) {
            let link = e2.target.value;
            let listItem = document.createElement('li');
            listItem.innerHTML = "<a href=\"" + link + "\">" + name + "<a>";
            console.log("<a href=\"" + link + "\">" + name + "<a>");
            console.log(listItem);


            let list = document.getElementById('list');
            list.appendChild(listItem);

        })


    })
})


// window.addEventListener('load', function() {

//     let inputBox = document.getElementById('input-box');
//     inputBox.addEventListener('change', function(e) {
//       //get the value  inside the input box
//       console.log(e.target.value);

//       //create the list item
//       let listItem = document.createElement('p');
//       listItem.innerHTML = e.target.value;

//       // find out where it goes, and append it there
//       let list = document.getElementById('list');
//       list.appendChild(listItem);
//     })

//   })