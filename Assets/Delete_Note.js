#pragma strict

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Note") {
		//Debug.Log("Hit something");
		Destroy(col.gameObject);
		Maincode.score -= 50;
		return;
	}
}

