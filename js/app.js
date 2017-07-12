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
var x=30;
var y=30;
var z;
var dx=3;
var dy=2;
//for canvas 
var canvas;
var ctx;
//players score
var p1Score=0;
var p2Score=0;



function init(){ //game board created
	ctx= $("#gameBoard")[0].getContext('2d');
	boxHeight=$("#gameBoard").height();
	boxWidth=$("#gameBoard").width();
	intervalId=setInterval(draw,10);
	return intervalId
}

function initPaddle(){ //paddle 1 created
	paddley=boxHeight/2;
	paddleh=80;
	paddlew=10;

}

function initPaddle2(){ //paddle 2 created
	paddley2=boxHeight/2;
	paddleh2=80;
	paddlew2=10;
}

window.addEventListener("keypress",key)
function key(event){
	var k = event.keyCode;
	if (k==108){
		paddley+=40;
	}
	if (k==111){
		paddley-=40;
	}

	if (k==97){
		paddley2+=40;
	}
	if (k==113){
		paddley2-=40;
	}
}

function draw(){
	clear();
	arc(x,y,10);
	rect(boxWidth-paddlew,paddley,paddlew,paddleh);
	rect(0,paddley2,paddlew2,paddleh2);

	if(x+dx<0){
		if(y>paddley2 && y<paddley2+paddleh2){
		dx=-dx;
		}else{

			console.log("player 1 win")
		}
	}else if(x+dx>boxWidth){
		if(y>paddley && y<paddley+paddleh){
			dx=-dx;
		}else{
			console.log("player 2 win")
			// clearInterval(intervalId);
		}
	}


	if(y+dy>boxHeight||y+dy<0){
		dy=-dy;
	}
	
	x+=dx;
	y+=dy;
}

function clear(){
	ctx.clearRect(0,0,boxHeight,boxWidth);
}

function arc(x,y,z) {
	ctx.beginPath();
	ctx.arc(x,y,z,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();	
}
function rect(a,b,c,d){
	ctx.beginPath();
	ctx.rect(a,b,c,d);
	ctx.closePath();
	ctx.fill();
}

init();
initPaddle();
initPaddle2();







})