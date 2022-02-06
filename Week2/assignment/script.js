window.addEventListener('load', function() {
    //hover cards
    let cards = document.getElementsByClassName('imgs');
    let texts = document.getElementsByClassName('text');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseenter', function() {
            console.log("mouse in", i);
            texts[i + 1].style.display = "flex";
        })
        cards[i].addEventListener('mouseleave', function() {
            console.log("mouse out");
            texts[i + 1].style.display = "none";
        })

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