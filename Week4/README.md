# Project 1 Week 2 brief
## Project Describtion
Since last Monday, I changed some details in what I hope to achieve with the website. I think the Idea I was going for at the begining is just an aesthetic picture slideshow thing where u can change the slide show depending on country location. Now I am following a more technical aproach. As a kid, I remember having searching for many country details with my siblings for fun. Particularly we used to search for population, gdp, flags and we compared a lot of countries together and what not. One restriction we had however was that at school, we didn't learn much about geography, so we ended up just searching for countries of names we know. This website allows search through maps so it is a lot more helpful as u can check information for many more countries without trying to type out complicated spellings on google seach bars and trying to find detail by detail.

## Data collected
I am trying to collect as many details as I can get, so far I have
1. a json file with country ISO
    1. Continent
    2. Capital
    3. time zone
    4. currency
    5. languages
2. a website where i can get country flags
3. I found WikiMedia API which I hope will have enough images depending on geo locations
4. a source where i can get country population and gdp but I still haven't been able to access the database

## New Setup
* Header 
    * title
    * info button opens instructions on hover
* First page
    * will have the main search map
        * map has popups with links to send you to next page, overscroll will be hidden
* Second Page
    * will have a few images in a slideshow, 
        * first the country flag
        * then the other wikimedia images
    * will have country details written in updated wireframe(maybe more)
    * go back to map button

## Next Steps
1. use contrycode.come json to get country details in second page
2. look a little more for images by location/ try google maps api
3. add error popup for locations where api detects no city
4. add instruction pop up on click on top corner
5. adjust flexbox stuff in second page
6. add go back to top button in second page at the bottom(sources go back to top) then add overflow:hidden back
6. make details in a scrollable div of fixed size maybe expandable titles
7. press next to get extra images of place

### If Time Allows
- I would like to add a pop up feature if I have time *(Like image zoom kind of thing)*.

## Website Link
[_Week 3_ Update](https://fnassar.github.io/connectionslab/Week4/assignment_1test "Website Current link")

## Wire frame
the wire frame includes the pop up window part as I feel like it is more user friendly to have an almost full screen map than a small half screen one. I also plan on adding it even if I don't have the time before the deadline for project 1.
![alt text](https://github.com/fnassar/connectionslab/blob/main/Week4\assignment_1test\WorldMapWireframe.jpeg"Wire Frame")
