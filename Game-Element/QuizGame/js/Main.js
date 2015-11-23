function g(x){
	var temp = document.getElementById(x);
	return temp;
}

function g2d(x) {
    console.log(x);
    var temp = document.getElementById(x).getContext("2d");
    return temp;
}
function Awake() {
    HidePersonia();
}

function Start() {
	InformationInit();
	QuizInit();
	RightMouseClick();


}

function Update(){
    SetInformation();
   

}

function RightMouseClick() {
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            ShowPersonia();
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function () {
            ShowPersonia();
            window.event.returnValue = false;
        });
    }
}



window.setInterval(Update,150);
window.addEventListener("load", Start, false);
window.addEventListener("onload", Awake, false);