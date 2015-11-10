var thisPlayer;
var PersonalSpot, NameSpot, ScoreSpot, CurrentScoreSpot;
var thisName, thisScore;
var IMAGE_PATH = "Images/"
var currentScore;
//Gets the personal information from the server
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
//Creates the PersonalField so you don't have to implement anything in HTML or Php
function CreatePersonalField() {
    CreateDiv("PersonalField", null, "body");
    //Image
    CreateDiv("AvatarField", null, "PersonalField");
    ModifyStyle("PersonalField", "PlayerAvatar");
    CreateImage("Avatar", ImagePath(), "AvatarField");

    CreateDiv("NameField",      thisPlayer.Name , "PersonalField");
    CreateDiv("ScoreField",     thisPlayer.Score, "PersonalField");
    ModifyDiv("PersonalField",  "onmouseover"   , "ShowPersonia()")
    ModifyDiv("PersonalField",  "onmouseout"    , "HidePersonia()")
    PersonalSpot            = g("PersonalField");
    NameSpot                = g("NameField");
    ScoreSpot               = g("ScoreField");

}


//Creates a div in HTML
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

//Creates An Image
function CreateImage(divName, ImagePath, targetDiv) {
    r = document.createElement("img");
    r.setAttribute("id", divName);
    r.setAttribute("alt", divName);
    r.src = ImagePath;
    g(targetDiv).appendChild(r);
}

//On a div you can modify it
function ModifyDiv(targetDiv, element, value) {
    r = g(targetDiv);
    r.setAttribute(element, value);
}

//Add elements to the objects css
function ModifyStyle(targetDiv, targetMethod) {
    if (targetMethod == "PlayerAvatar") {
        g(targetDiv).style.background = "#903";
    }
}

//On disable the object will return to a position where you can only read the name and score
function HidePersonia() {
    Tabsize = document.body.parentNode.clientHeight;
    PersonalSpot.style.top = (Tabsize - 50).toString() + "px";
}

//On Enable the target will jump into the page
function ShowPersonia() {
    Tabsize = document.body.parentNode.clientHeight;
    PersonalSpot.style.top = (Tabsize - 180).toString() + "px";
 
}
//Gets the targetImage from the documentation to use in game
function ImagePath() {
    path = IMAGE_PATH + "Player1.png";
    return path;
}

//---|||----\\
//Loads Targetimage that can be used
/*function loadImage(name) {
    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    }
    images[name].src = "Images/" + name + ".png";

}


//The frames will move only when all images are loaded
function resourceLoaded() {
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
        setInterval(redraw, 1000 / fps);
    }
}

//draw the targetimages
function redraw() {
    var x = charX;

    context.canvas.width = context.canvas.width;

    context.drawImage(images["Feets/Feet"], x + 0, 0);
    context.drawImage(images["Bodies/Body"], x + 0, 0);
    context.drawImage(images["Heads/Head"], x + 0, 0);
    ScoreDefiner(tempScore);
}
*/
//document.addEventListener("mouseover", ShowPersonia);
//document.addEventListener("mouseout", HidePersonia);
