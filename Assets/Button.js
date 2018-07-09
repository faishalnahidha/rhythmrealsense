#pragma strict

var WhatButton: int = 1; 
var ErrorSound : GameObject; 
var Smoke : GameObject;
var RightSound : GameObject; 
var Flame : GameObject; 
var over: boolean = false;

function Update(){
	/*if ( WhatButton == 1 ) {
		transform.position.x = -1.5; //Set object x position
		transform.position.y = 1.6;  //Set object y position
		transform.position.z = 3.37;  //Set object z position
	}

	if ( WhatButton == 2 ) {
		transform.position.x = -0.45; //Set object x position
		transform.position.y = 1.6;  //Set object y position
		transform.position.z = 3.37;  //Set object z position
	}

	if ( WhatButton == 3 ) {
		transform.position.x = 0.6; //Set object x position
		transform.position.y = 1.6;  //Set object y position
		transform.position.z = 3.37;  //Set object z position
	}

	if ( WhatButton == 4 ) {
		transform.position.x = 1.65; //Set object x position
		transform.position.y = 1.6;  //Set object y position
		transform.position.z = 3.37;  //Set object z position
	}*/

	if (Input.GetButtonDown ("1")) {
		if ( WhatButton == 1 ) {
			transform.position.y = 1.52;
			if ( over == true ) {
				Instantiate(Flame, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(RightSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score += 100;
				over = false;
				return;
			}
			if ( over == false ) {
				Instantiate(Smoke, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(ErrorSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score -= 100;
				return;
			}
		}				
	}
	
	if (Input.GetButtonUp ("1")) {
		if(WhatButton == 1){
			transform.position.y = 1.6;
		}
	}

	if (Input.GetButtonDown ("2")) {
		if ( WhatButton == 2 ) {
			transform.position.y = 1.52;
			if ( over == true ) {
				Instantiate(Flame, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(RightSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score += 100;
				over = false;
				return;
			}
			if ( over == false ) {
				Instantiate(Smoke, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(ErrorSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score -= 100;
				return;
			}
		}
	}
	
	if (Input.GetButtonUp ("2")) {
		if(WhatButton == 2){
			transform.position.y = 1.6;
		}
	}

	if (Input.GetButtonDown ("3")) {
		if ( WhatButton == 3 ) {
			transform.position.y = 1.52;
			if ( over == true ) {
				Instantiate(Flame, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(RightSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score += 100;
				over = false;
				return;
			}
				if ( over == false ) {
				Instantiate(Smoke, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(ErrorSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score -= 100;
				return;
			}
		}
	}
	
	if (Input.GetButtonUp ("3")) {
		if(WhatButton == 3){
			transform.position.y = 1.6;
		}
	}

	if (Input.GetButtonDown ("4")) {
		if ( WhatButton == 4 ) {
			transform.position.y = 1.52;
			if ( over == true ) {
				Instantiate(Flame, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(RightSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score += 100;
				over = false;
				return;
			}
			if ( over == false ) {
				Instantiate(Smoke, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Instantiate(ErrorSound, transform.position + Vector3(0, 1, 0), Quaternion.Euler(0,0,0) );
				Maincode.score -= 100;
				return;
			}
		}
	}
	
	if (Input.GetButtonUp ("4")) {
		if(WhatButton == 4){
			transform.position.y = 1.6;
		}
	}
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Note") {
		Debug.Log("Note Enters");
		over = true;
	}
}

function OnTriggerExit(other : Collider){
	if(other.gameObject.tag == "Note") {
		Debug.Log("Note Exits");
		over = false;
	}
}

function OnTriggerStay(other : Collider){
	if(other.gameObject.tag == "Note") {
		Debug.Log("Note Stays");
		if (Input.GetButtonDown ("1")) {
			if ( WhatButton == 1 ) {
				if ( over == true ) {
					Destroy(other.gameObject);
				}
			}
		}
		if (Input.GetButtonDown ("2")) {
			if ( WhatButton == 2 ) {
				if ( over == true ) {
					Destroy(other.gameObject);
				}
			}
		}
		if (Input.GetButtonDown ("3")) {
			if ( WhatButton == 3 ) {
				if ( over == true ) {
					Destroy(other.gameObject);
				}
			}
		}

		if (Input.GetButtonDown ("4")) {
			if ( WhatButton == 4 ) {
				if ( over == true ) {
					Destroy(other.gameObject);
				}
			}
		}
	}
}