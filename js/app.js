var spectrum = new Audio("spectrum.mp3");

window.onload= function(){
	spectrum.play();
	console.log("loaded");
	squares();
}

var s1="1";
var s2="2";
var s3="3";
var s4="4";
var s5="5";
var s6="6";
var s7="7";
var s8="8";
var s9="9";
var turn="X";

function squares(){
	document.getElementById("winner").innerHTML = "Who will win?";
	s1="1";
	s2="2";
	s3="3";
	s4="4";
	s5="5";
	s6="6";
	s7="7";
	s8="8";
	s9="9";
	turn="X";
	document.getElementById('square1').innerHTML = "<button class='touch' id='button1' onclick='xo1()'></button>";
	document.getElementById('square2').innerHTML = "<button class='touch' id='button2' onclick='xo2()'></button>";
	document.getElementById('square3').innerHTML = "<button class='touch' id='button3' onclick='xo3()'></button>";
	document.getElementById('square4').innerHTML = "<button class='touch' id='button4' onclick='xo4()'></button>";
	document.getElementById('square5').innerHTML = "<button class='touch' id='button5' onclick='xo5()'></button>";
	document.getElementById('square6').innerHTML = "<button class='touch' id='button6' onclick='xo6()'></button>";
	document.getElementById('square7').innerHTML = "<button class='touch' id='button7' onclick='xo7()'></button>";
	document.getElementById('square8').innerHTML = "<button class='touch' id='button8' onclick='xo8()'></button>";
	document.getElementById('square9').innerHTML = "<button class='touch' id='button9' onclick='xo9()'></button>";
}
function xo1(){
	s1=turn;
	check();
	console.log("1");
	mark("square1");
}

function xo2(){
	s2=turn;
	check();
	console.log("2");
	mark("square2");
	//document.getElementById("square2").innerHTML ="<h1>o</h1>";
}

function xo3(){
	s3=turn;
	check();
	console.log("3");
	mark("square3");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo4(){
	s4=turn;
	check();
	console.log("4");
	mark("square4");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo5(){
	s5=turn;
	check();
	console.log("5");
	mark("square5");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo6(){
	s6=turn;
	check();
	console.log("6");
	mark("square6");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}

function xo7(){
	s7=turn;
	check();
	console.log("7");
	mark("square7");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo8(){
	s8=turn;
	check();
	console.log("8");
	mark("square8");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo9(){
	s9=turn;
	check();
	console.log("9");
	mark("square9");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}

function mark(input){
	if(turn=="X"){
		turn="O";
		document.getElementById(input).innerHTML="<h1>X</h1>";
	}else if(turn=="O"){
		turn="X";
		document.getElementById(input).innerHTML="<h1>O</h1>";
	}
}

function check(){
	if(s1==s2 && s2==s3){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s4==s5 && s5==s6){
		console.log(turn+" wins");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s7==s8 && s8==s9){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s1==s4 && s4==s7){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s2==s5 && s5==s8){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s3==s6 && s6==s9){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s1==s5 && s5==s9){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	} else if(s3==s5 && s5==s7){
		console.log(turn+" win");
		document.getElementById("winner").innerHTML = turn + " is the winner!";
	}
}
