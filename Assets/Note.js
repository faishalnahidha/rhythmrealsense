#pragma strict

function Start () {

}

function Update () {
	transform.position.y = 2;
	transform.Translate(Vector3(0,0,-5) * Time.deltaTime);
	/*if (!renderer.isVisible)
	{
		Destroy(gameObject); 
	}*/
}