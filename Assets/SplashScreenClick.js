#pragma strict

var Sound : GameObject;

function Start () {
	yield WaitForSeconds (2);
	Instantiate(Sound, transform.position + Vector3(0, 0, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds (.2);
	Instantiate(Sound, transform.position + Vector3(0, 0, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds (.7);
	Application.LoadLevel("Main_Menu");
}

function Update () {
	
}