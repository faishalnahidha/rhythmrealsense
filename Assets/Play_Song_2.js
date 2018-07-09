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
	yield WaitForSeconds (0);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 15), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 15), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 15), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (0);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 17), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 17), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 17), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (0);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 19), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 19), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 19), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (0.1);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.25);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.35);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.2);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	
	Song1();
}

function Song1 () {

	yield WaitForSeconds (1.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.4);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
		
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.4);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow

	yield WaitForSeconds (1);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	
	yield WaitForSeconds (0.5);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (.1);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (.5);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (.3);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	yield WaitForSeconds (.1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	
	yield WaitForSeconds (2.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //blue
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	SongChorus();
}

function SongChorus(){
	yield WaitForSeconds (1.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow;
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	
	//repeat above
	
	yield WaitForSeconds (1.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	
	yield WaitForSeconds (1);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (.3);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	
	SongEnd();
}

function SongEnd(){
	yield WaitForSeconds (7);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	yield WaitForSeconds (3);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 2, 20), Quaternion.Euler(0,0,0) ); //red note
	yield WaitForSeconds (2);
	Instantiate(Yellowobject, transform.position + Vector3(1.65, 2, 20), Quaternion.Euler(0,0,0) ); //yellow
	yield WaitForSeconds (2);
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
	yield WaitForSeconds (2);
	Instantiate(Blueobject, transform.position + Vector3(-0.45, 2, 20), Quaternion.Euler(0,0,0) ); //bluen
	Instantiate(Greenobject, transform.position + Vector3(0.6, 2, 20), Quaternion.Euler(0,0,0) ); //green
}