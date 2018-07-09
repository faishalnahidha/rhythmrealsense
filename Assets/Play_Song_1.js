#pragma strict

var Redobject : GameObject;
var Blueobject : GameObject;
var Greenobject : GameObject;
var Yellowobject : GameObject;

function Start () {
	Maincode.score = 0;
	SongIntro();
}

function SongIntro(){
	yield WaitForSeconds (0.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 10), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 11), Quaternion.Euler(0,0,0) ); //yellow 
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 12), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 13), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (0);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.55);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.55);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.55);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.55);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.55);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	Song1();
}

function Song1(){
	yield WaitForSeconds (2.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.6);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.6);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.6);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	
	yield WaitForSeconds (.65);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.6);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (2.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (2.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (2.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (2.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	SongChorus1();
}

function SongChorus1() {
	yield WaitForSeconds (2.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green

	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	//ganti ritme
	
	yield WaitForSeconds (.4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green	
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	//ganti ritme
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	//ganti ritme
	
	yield WaitForSeconds (.4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green	
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	SongBridge();
}

function SongBridge(){
	yield WaitForSeconds (2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (3);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow 
	yield WaitForSeconds (.2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	
	yield WaitForSeconds (2.75);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	SongChorus2();
}

function SongChorus2(){
	yield WaitForSeconds (1);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green

	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	yield WaitForSeconds (.35);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	//ganti ritme
	
	yield WaitForSeconds (.4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green	
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	//ganti ritme
	yield WaitForSeconds (.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.25);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.25);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	
	//ganti ritme
	
	yield WaitForSeconds (.4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green	
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (2.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	

}