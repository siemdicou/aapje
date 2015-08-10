function g(x){
	var temp = document.getElementById(x);
	return temp;
}


function Start(){
	InformationInit();
	QuizInit();

}

function Update(){
	SetInformation();

}


window.setInterval(Update,150);
window.addEventListener("load", Start, false);