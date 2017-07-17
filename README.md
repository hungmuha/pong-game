***DESCRIPTION:
-Everykid who grow up in the golden age of Arcade game still remember the sound of Pong when it is being played in those old school tv with just black and white color. In addition to being one of the original game that put Atari on the map, it is a better part of my childhood. Therefore I want to recreate Pong for this first project in my portfolio. PONG is going to be dope!!!

-landing-page-project1 sketch is in the images folder

-project1-game sketch is in the images folder

***GH-PAGE:

-https://hungmuha.github.io/project-1-game/

***TRELLO:

-https://trello.com/b/PNbUg2sp/wdi-project-1-game

***TECHNOLOGY USED:

-HTML, CSS, Javascript, Jquery (the lazy version of Javascript), Canvas, Some knowledge of Algebra. 

***UNSOLVED PROBLEMS:

-Some perks that I set out to do but didn't get to it like the bonus perks that if someone has won twice in a row would have. 

***PROGRAM NOTE:

-In order to tackle this game, I used canvas as the elements to create this game as pong is a game quite many collision and movement that canvas offer an easier way to deal with this problem. 

-In order to make this game, I had to make sure that I first can create a ball that bounce and travel within a "box proximity". After observing how the ball fly on the original game, I know that I need to use vectors to direct the ball. By using equation (x+dx), (y+dy) I consistently make the ball move within the canvas. There are quite a few problem that I run into that took my a long time to figure out but it is just a syntax issue. As I can't really change the width and height of the canvas element on CSS page without disturbing how all other interconnected part of the game like how the balls travel inside the canvas and how it was distorted by the border. To solve this issue I have to declare all these specific characteristic of this elements right in the HTML file. 

-The next issue I have to deal with is making sure that as the balls bounce off the wall it is changing direction the same way as the player expect it to do, like a real pong ball without the spinning. In order to do that, I set dx=-dx everytime it hit a vertical wall, and dy=-dy everytime it hit a horizontal wall.

-The next addition to this program, the Paddles complicate everything that was going on because now, if the ball hit the paddle it bounce back but if it doesn't hit the paddles instead hit the vertical walls, the game stop. In order to conquer this program, I have to make sure that the ball use the same x and y coordinate as the paddle. As the ball hit within (>) than certain x value of the paddle but smaller than a certain value of the paddle the ball will bounce back.

-The next thing that I did was giving a little extra that make it my game. After a certain amount of back and forward, the ball will start to speed up until someone lose. Because this is America and we don't like tie game (that's why soccer suck!!).  

-After that mechanism is put in, everything else like score, button that restart the game and such is easier walk because I can use other solutions that I have used in the HWs...

-The hardest part about this project is probably styling for me. I want to demonstrate my ability to use animation in my homepage. 

***RELECT:

-Thoughout the project, there are a lot of expectation that I had in regard of potential roadblocks and the timeline that I set up as regarded in Trello but most of those expectations are incorrect. Surprisingly, the part that I thought was hardest to figure out I went through it quicker than the part that I thought would be easier. 

-My strength is within the realm of Javascript and anything that is Math/logic related. 

-My weakness is definitely styling as sometime I don't know what is going on with CSS, and the problem is not so inherent and require a lot of back tracking and guessing until the problem is solved. But getting better at it is always possible because anything is only as good as it is perceived

-I ended up not liking my original wireframes as defined and I went with the new idea to keep it cool and original at the sametime show case my ability to showcase some animation on the landing page.




