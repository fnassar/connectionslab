<!-- Provides a clear description of the project, production decisions (i.e. technical, design, conceptual, creative etc), influences and inspiration, key challenges and solutions, overall lessons learned as well as potential next steps, and relevant references/resources that were utilized 

![alt text](https://github.com/fnassar/connectionslab/blob/main/week3/assignment/images/WorldMap.jpeg "Wire Frame")
-->
# Project 1 Documentation 
## World Map Seaech
### *By Fatema Nassar*

[*Link*](https://github.com/fnassar/connectionslab/tree/main/Project1 "Code") *to Project Codes*

[*Link*](https://fnassar.github.io/connectionslab/Project1/ "Code") *to Website*

*link to presentation*

## Description

## Inspiration and Thought Process
I first got the map inspiration from Marta's second week project. I saw it and I thought wow this could go far. At the begining I was considering a map that covers the screen with a picture that changes with country location and have information show on hover. 
That however, did not work for 2 main reasons:
1. giving the time frame we had, as I would need to implement my own map from scratch on p5 or using svgs. 
2. I feel like actually envisioning this, finding the right colors and the images changing in the background might not look that good and the picture will not show in whole.

> ***side Note*** I now think it could work but I just couldn't figure it out at the time.

<!-- <img src="www.addwireframeexaplehere.com" alt="Image not found" width="500"/> -->

Then I decided on spliting screen in half as shown in the wire frame bellow. That would have been really hard for the user I think. Having country info, images and map all in one place i think would be too much. the wire frame I had did not have enough space for anything extra with the design I was going for.
### initial Wireframe:
<img src="https://github.com/fnassar/connectionslab/blob/main/week3/assignment/images/WorldMap.jpeg" alt="Image not found" width="500"/>

### Final WireFram:
I also usually prefer simplistic aspects that are easy for the eye and that would not have been. 

<img src="https://github.com/fnassar/connectionslab/blob/main/Week4/assignment_1test/WorldMapWireframe.jpeg" alt="image not found" width="500">

## Production Decisions (code snippets)
* I decided to split my display screens in 2 as I explained above. 

* I wanted to have static screens without scrolling I knew that from the begining. So I used `overflow:hidden` *CSS* for the body and only allowed scrolling inside the info. `div` where it was needed.
#### Info. `div`:
<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/infodiv2.jpg" alt="Image not found" width="500">

* I added a *go back up* button as I know the user will want to check the map again, choose a different country 

<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/goback.jpg" alt="Image not found" width="500">

* One thing I was sure to do is smooth scrolling on click `document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });`. As scrolling is not allowed, the scrolling, I belive, allows the user to know they is in the same page and facilitates the understanding that they can "go back up". 


## Key Challenges and Solutions (code snippets)
1. I believe the main challenge I had was the fact that the country details took a long time to load.
    * To solve that, I made a scrolling function and called it inside the function where the last group of data is retrieved
    * I also change the cursor to `cursor: wait;` while the data was loading to let the user know that it is loading
2. Another challenge I faced was the amount of errors I had to manage. Errors were poping up a lot whenever there was any error with the data retrieved and I had to manage a few `catch` functions to control these errors. For example:
    1. when user chooses a no city location:
    ```.catch(err => {
            document.body.style.cursor = "default";
            document.getElementById("tag").style.cursor = "pointer";
            // add a pop up here
            console.log("not a city");
            document.getElementById('infopopup2').style.opacity = "100%";
            document.getElementById('infopopup2').innerHTML = "This is not a city";
            document.getElementById('infopopup2').style.display = "flex";
            window.setTimeout(() => {
                document.getElementById('infopopup2').style.transition = "3s ease-out";
                document.getElementById('infopopup2').style.display = "none";
            }, 2000)
            console.error(err);
        });
    ```
    2. when no images are found
     ```catch(err => {
            scrollfunction("content");
            document.getElementById('infopopup2').style.opacity = "100%";
            document.getElementById('infopopup2').innerHTML = "Sorry, no images were found";
            document.getElementById('infopopup2').style.display = "flex";
            window.setTimeout(() => {
                // document.getElementById('infopopup2').style.transition = "3s ease-out";
                document.getElementById('infopopup2').style.display = "none";
            }, 2000)
            console.error(err);
        });
    ```
    Both errors were the same popup with different texts, look like this:
    
    <img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/error1.jpg" alt="Image not found" width="700">

3. I also struggled a little with the pop-ups. Even though I did it before, using another `section` for overlay or popups did not come to my mind straight away.

4. 
## Lessons Learned 
* I think the main lesson learned from this, is that there is a library for everything and creating a map from scratch cannot give a result with nearly good quality.
* Another main thing is that when making something that is close to an existing platform needs it's own unique thing. *I asked myself a lot why not google maps before I added the extra info. and the flag to the second page.*


## Screenshots

<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/images5.jpg" alt="Image not found" width="700">
<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/images1.jpg" alt="Image not found" width="700">
<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/images4.jpg" alt="Image not found" width="700">
<img src="https://github.com/fnassar/connectionslab/blob/main/Project1/images/images2.jpg" alt="Image not found" width="700">

## Next Steps
* Add a title page and clean up whole website
* Fix data and units used from API(maybe different sources)
* Add self country and allow user to compare data to other countries
* Present data in a "*Graphic data presentation*"
* allow user to zoom on images (pop up like my main wire frame idea with side by side map)
