function g(x){
	var temp = document.getElementById(x);
	return temp;
}

function g2d(x) {
    var temp = document.getElementById(x).getContext2D();
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