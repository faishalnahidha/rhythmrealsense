#pragma strict

var Sound1 : GameObject;
var Sound2 : GameObject;

function Start(){
	
}

function OnClickPlaySong1 () {
	Application.LoadLevel("Song_1_Payphone");
}

function OnClickHow () {
	Application.LoadLevel("How_To");
}

function OnClickCredit (){
	Application.LoadLevel("Credit");
}

function OnClickPlaySong2 () {
	Application.LoadLevel("Song_2_Tell");
}

function OnClickMenu () {
	Application.LoadLevel("Main_Menu");
}

function OnClickMenu2() {
	//Maincode.score = 0;
	Application.LoadLevel("Main_Menu");
}