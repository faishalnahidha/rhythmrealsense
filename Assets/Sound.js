#pragma strict

function Start () {
 	audio.Play();
 	sound();
 	
}

function sound () {
	yield WaitForSeconds (audio.clip.length);
	Destroy(gameObject);
}