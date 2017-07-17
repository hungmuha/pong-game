Everykid who grow up in the golden age of Arcade game still remember the sound of Pong when it is being played in those old school tv with just black and white color. In addition to being one of the original game that put Atari on the map, it is a better part of my childhood. Therefore I want to recreate Pong for this first project in my portfolio. PONG is going to be dope!!!

landing-page-project1 sketch is in the images folder

project1-game sketch is in the images folder

Program note:

In order to tackle this game, I used canvas as the elements to create this game as pong is a game quite many collision and movement that canvas offer an easier way to deal with this problem. 

In order to make this game, I had to make sure that I first can create a ball that bounce and travel within a "box proximity". By using equation (x+dx), (y+dy) I consistently make the ball move within the canvas. There are quite a few problem that I run into that took my a long time to figure out but it is just a syntax issue. As I can't really change the width and height of the canvas element on CSS page without disturbing how all other interconnected part of the game like how the balls travel inside the canvas and how it was distorted by the border. To solve this issue I have to declare all these specific characteristic of this elements right in the HTML file. 

The next issue I have to deal with is making sure that as the balls bounce off the wall it is changing direction the same way as the player expect it to do, like a real pong ball without the spinning. In order to do that, I set dx=-dx everytime it hit a vertical wall, and dy=-dy everytime it hit a horizontal wall.

The next addition to this program, the Paddles complicate everything that was going on because now, if the ball hit the paddle it bounce back but if it doesn't hit the paddles instead hit the vertical walls, the game stop. In order to conquer this program, I have to make sure that the ball use the same x and y coordinate as the paddle. As the ball hit within (>) than certain x value of the paddle but smaller than a certain value of the paddle the ball will bounce back. 

 

