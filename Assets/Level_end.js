#pragma strict

function Start () {
 	audio.Play();
 	sound();
 	
}

function sound () {
	yield WaitForSeconds (audio.clip.length);
	if ( Maincode.score >= Maincode.Song1highscore )
	{
	 	Maincode.Song1highscore=Maincode.score;
		Application.LoadLevel("When_Song_End");
	}
	else
	{
	Application.LoadLevel("When_Song_End");
	}
	
}