var thisPlayer;
var PersonalSpot, NameSpot, ScoreSpot, CurrentScoreSpot;
var thisName, thisScore;
var IMAGE_PATH = "Images/"
var currentScore;
function InformationInit(){
    thisPlayer = new PlayerInformation(0, "Chanisco", 101);
    CreatePersonalField();

}

function SetInformation() {
    if (NameSpot != null) {
        NameSpot.innerHTML = thisPlayer.Name.toString();
        ScoreSpot.innerHTML = thisPlayer.Score.toString();
    }

}

function UpdateScore(){
	ScoreSpot.innerHTML 		    = thisPlayer.Score.toString();

}
function AddPoints(GainedAmount){
	thisPlayer.Score                += (parseInt(GainedAmount));

}

function RemovePoints(LostAmount){
	thisPlayer.Score                -= (parseInt(LostAmount));

}

function CreatePersonalField() {
    CreateDiv("PersonalField", null, "body");
    //Image
    CreateDiv("AvatarField", null, "PersonalField");
    ModifyStyle("PersonalField", "PlayerAvatar");
    CreateImage("Avatar", ImagePath(), "AvatarField");

    CreateDiv("NameField", thisPlayer.Name, "PersonalField");
    CreateDiv("ScoreField", thisPlayer.Score, "PersonalField");
    ModifyDiv("PersonalField", "onmouseover", "ShowPersonia()")
    ModifyDiv("PersonalField", "onmouseout", "HidePersonia()")
    PersonalSpot   = g("PersonalField");
    NameSpot       = g("NameField");
    ScoreSpot       = g("ScoreField");

}



function CreateDiv(divName, value, Parent, r) {
    var r = document.createElement(divName);
    r.setAttribute("id", divName)
    r.setAttribute("id", divName)
    if (value != null) {
        var t = document.createTextNode(value);
        r.appendChild(t);
    }
    if (Parent === "body") {
        document.body.appendChild(r);
    } else {
        g(Parent).appendChild(r);
    }

}

function CreateImage(divName, ImagePath, targetDiv) {
    var r = document.createElement("img");
    r.setAttribute("id", divName);
    r.setAttribute("alt", divName);
    r.src = ImagePath;
    g(targetDiv).appendChild(r);
}
function ModifyDiv(targetDiv, element, value) {
    r = g(targetDiv);
    r.setAttribute(element, value);
}

function ModifyStyle(targetDiv, targetMethod) {
    if (targetMethod == "PlayerAvatar") {
        g(targetDiv).style.background = "#903";
    }
}

function HidePersonia() {
    PersonalSpot.style.top = (window.innerHeight - 50).toString() + "px";
}
function ShowPersonia() {
    PersonalSpot.style.top = (window.innerHeight -180).toString() + "px";

}

function ImagePath() {
    path = IMAGE_PATH + "Player1.png";
    return path;
}


//document.addEventListener("mouseover", ShowPersonia);
//document.addEventListener("mouseout", HidePersonia);
