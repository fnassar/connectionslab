# Project 2 Progress
## Describtion:
For this project, The final plan is to create leaves that fall everytime a user joins the server. 
- Each user's leaf shows their name and is generated at a random location
as the leaf falls to the ground, it resets and starts falling from a new x-coordinate. 
- if the user presses on a leaf, the owner of the leaf and the person who clicks are both moved to a chat room
(Like a speed date thing);
- each user can add a quote that reminds them of the enviroment when they join the server. quotes are to be displayed in the background(moving in random motion).

## Problems
To make the leaves in divs(pressable). I was not sure how to create that with p5 where the animation would be a lot simpler.
However, the motion does not work on pure js. I think it may be because of the slow reading of the image or because of a problem with the set time out function. I still cannot figure out the problem with the object.

## next steps:
1. First, I will try to remove the objects from the class and see if the movment problem was only from within the class.(also try other methods)
2. I will add socket id to user emited data to compare and know which user to choose for chats
3. Then I will setup a channel for chat with rooms for user to access.
4. I will add a button for user to be able to go back to previous screen
5. if time allows, I will save leaf data using nedb and delete each day as new data is made.
