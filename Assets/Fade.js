#pragma strict
var timer: float = 1;
function Start () {

}

function Update () {
transform.position.z = -2;

timer+=1;
	if ( timer >= 40 ) {
		Destroy(gameObject);

}
}