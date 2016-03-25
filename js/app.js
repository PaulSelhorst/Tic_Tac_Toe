window.onload= function(){
	console.log("loaded");
	squares();
}

var s1="0";
var s2="0";
var s3="0";
var s4="0";
var s5="0";
var s6="0";
var s7="0";
var s8="0";
var s9="0";
var turn="x"

function squares(){
	turn="x";
	document.getElementById('square1').innerHTML ="<button id='button1' onclick='xo1()'>1</button>";
	document.getElementById('square2').innerHTML ="<button id='button2' onclick='xo2()'>2</button>";
	document.getElementById('square3').innerHTML ="<button id='button3' onclick='xo3()'>3</button>";
	document.getElementById('square4').innerHTML ="<button id='button4' onclick='xo4()'>4</button>";
	document.getElementById('square5').innerHTML ="<button id='button5' onclick='xo5()'>5</button>";
	document.getElementById('square6').innerHTML ="<button id='button6' onclick='xo6()'>6</button>";
	document.getElementById('square7').innerHTML ="<button id='button7' onclick='xo7()'>7</button>";
	document.getElementById('square8').innerHTML ="<button id='button8' onclick='xo8()'>8</button>";
	document.getElementById('square9').innerHTML ="<button id='button9' onclick='xo9()'>9</button>";
}
function xo1(){
	s1=turn;
	console.log("1");
	mark("square1");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}

function xo2(){
	s2=turn
	console.log("2");
	mark("square2");
	//document.getElementById("square2").innerHTML ="<h1>o</h1>";
}

function xo3(){
	s3=turn
	console.log("3");
	mark("square3");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo4(){
	s4=turn
	console.log("4");
	mark("square4");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo5(){
	s5=turn
	console.log("5");
	mark("square5");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo6(){
	s6=turn
	console.log("6");
	mark("square6");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}

function xo7(){
	s7=turn
	console.log("7");
	mark("square7");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo8(){
	s8=turn
	console.log("8");
	mark("square8");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}


function xo9(){
	console.log("9");
	mark("square9");
	//document.getElementById("square1").innerHTML ="<h1>x</h1>";
}



function mark(input){
	if(turn=="x"){
		turn="o";
		document.getElementById(input).innerHTML="<h1 class=" + input + ">x</h1>";
	}else if(turn=="o"){
		turn="x";
		document.getElementById(input).innerHTML="<h1 class=" + input + ">o</h1>";
	}
}







