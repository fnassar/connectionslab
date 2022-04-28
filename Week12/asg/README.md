# Documentation
[website](https://fnassar.github.io/connectionslab/Week12/asg/)
## Library + Inspiration
For this sketch I decided to use Ml5 library.
I chose it when I found the function that finds hand position, because for my intro to IM final project, I spent hours trying to find a library that does that for me. I ended up using openCv for my Intro to IM final, but it still needed a marker to track and would not work without one. So, because of my previous struggles and not knowing libraries like Ml5 (I am still not sure if it works on processing) I wanted to give it a try.

## Description
I made a 2 page website with a title page and a page for the canvas.
> (the title/content page is something I ocasionally find myself doing recently, not sure why?) 
For the canvas page the user can start the canva then pause the canvas whenever needed.
I used a simple brush because I was just trying to understand how Ml5 worked with tracking hand locations.
I put a small video of the user on the top corner so that the user can see and be able to navigate better by seeing their hand on the small screen.

### Images
![img1](https://github.com/fnassar/connectionslab/blob/main/Week12/asg/images/img1.jpg)
![img2](https://github.com/fnassar/connectionslab/blob/main/Week12/asg/images/img2.jpg)
![img3](https://github.com/fnassar/connectionslab/blob/main/Week12/asg/images/img3.jpg)

## Troubles
1. First problem I ran into was navigating the canvas and controling it's location
  - for that I realised i can control the canva using a built in class name p5Canvas.
2. Second Problem I ran into was the color picker
  - The p5 color picker I used was not created as a part of the same div the p5 canvas was in.
  - It also requires a position to display it,
    - this position required an x,y location that depended on the html window and not the canvas, so when i tried to position it relative to screen size, it was not the most responsive or easy to manage.
3. 
4. 
## Next Steps
- organize page more
  - i feel like the page style could use a lot more work
- make the brushed generative to have more animation and make it more fun
  - drawing with hand is not easy, so having a brush that looks cool anyway would make it more fun to use
- work on page responsivity as ml5 made the website a lot heavier than I expected
