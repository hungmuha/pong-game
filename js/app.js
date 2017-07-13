$(document).ready(function(){

var boxHeight;
var boxWidth;
//paddle 1
var paddley;
var paddleh;
var paddlew;
//paddle 2
var paddley2;
var paddleh2;
var paddlew2;
var intervalId;
//var in rect paddle
var a;
var b;
var c;
var d;
//var for the ball
var x=200;
var y=200;
var z;
var dx=2;
var dy=1;

//for canvas 
var canvas;
var ctx;
//players score
var p1Score=0;
var p2Score=0;
//scoreboard function to show score
function scoreB(){
	document.getElementById("score1").textContent=p1Score;
	document.getElementById("score2").textContent=p2Score;
	if(p1Score==3){
		alert ("player 1 win the game");
	}
	if(p2Score==3){
		alert ("player 2 win the game");
	}
}

function init(){ //game board created
	ctx= $("#gameBoard")[0].getContext('2d');
	boxHeight=$("#gameBoard").height();
	boxWidth=$("#gameBoard").width();
	intervalId=setInterval(draw,10);
	return intervalId;
}

function initPaddle(){ //paddle 1 created
	paddley=boxHeight/2;
	paddleh=100;
	paddlew=10;

}

function initPaddle2(){ //paddle 2 created
	paddley2=boxHeight/2;
	paddleh2=100;
	paddlew2=10;
}

window.addEventListener("keypress",key)
function key(event){
	var k = event.keyCode;
	if (k==108 && paddley+paddleh<boxHeight){
		paddley+=50;
	}
	if (k==111 && paddley>=0){
		paddley-=50;
	}
}

window.addEventListener("keypress",key2)
function key2(event){
	var s = event.keyCode;
	if (s==97 && paddley2+paddleh2<boxHeight){
		paddley2+=50;
	}
	if (s==113 && paddley2>=0){
		paddley2-=50;
	}
}

function draw(){ //function that draw everything in canvas
	clear();
	arc(x,y,10);
	var player1= rect(boxWidth-paddlew,paddley,paddlew,paddleh);
	var player2= rect(0,paddley2,paddlew2,paddleh2);

	if(x+dx<0){
		if(y>paddley2 && y<paddley2+paddleh2){
			dy=8*((y-(paddley2+paddleh2)/2)/paddleh2);
			dx=-dx;
		}else{
			console.log("player 1 win");
			p1Score++;
			scoreB();
			clearInterval(intervalId);
		}
	}else if(x+dx>boxWidth){
		if(y>paddley && y<paddley+paddleh){
			dy=5*((y-(paddley+paddleh)/2)/paddleh);
			dx=-dx;
		}else{
			console.log("player 2 win");
			p2Score++;
			scoreB();
			clearInterval(intervalId);
		}
	}
	if(y+dy>boxHeight||y+dy<0){
		dy=-dy;
	}
	
	x+=dx;
	y+=dy;
}

function clear(){ //create clear box in canvas 
	ctx.clearRect(0,0,boxHeight,boxWidth);
}

function arc(x,y,z) { //create the ball
	ctx.beginPath();
	ctx.arc(x,y,z,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();	
}
function rect(a,b,c,d){ //create the paddle
	ctx.beginPath();
	ctx.fillStyle="#A2FF23";
	ctx.rect(a,b,c,d);
	ctx.closePath();
	ctx.fill();
}

var clearB=document.getElementById("clearBoard"); //RESET button
clearB.addEventListener("click",reset);

function reset(){ //reset function that start everything again
	x=200;
	y=200;
	paddley=boxHeight/2;
	paddleh=100;
	paddlew=10;
	paddley2=boxHeight/2;
	paddleh2=100;
	paddlew2=10;
	start();
}

var playA= document.getElementById("restart"); //START button function tos tart game
playA.addEventListener("click",restart);

function restart(){
	p1Score=0;
	p2Score=0;
	reset();
}

function start(){
	init();
	initPaddle();
	initPaddle2();
	scoreB();
}





})