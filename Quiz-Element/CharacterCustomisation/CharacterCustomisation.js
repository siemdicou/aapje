var images = {};
var maxOutfits = 1;
var context;
var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;
var charX = 0;
var charY = 0;

function InsertTargetAssets(target){
    for(i = 0; i < maxOutfits;i++){
        loadImage(target.toString() + "00" + i);

    }

}
function InsertAllAssets() {
    context = document.getElementById("Character").getContext("2d")
    InsertTargetAssets("Head");
    InsertTargetAssets("Body");
    InsertTargetAssets("Legs");
    resourceLoaded();

}

function loadImage(name) {
    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    }
    images[name].src = "../../img/" + name + ".png";
}



function resourceLoaded() {
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
        window.setInterval(redraw, 150);
    }
}

function redraw() {
    var x = charX;
    var y = charY;
        
    context.canvas.width = context.canvas.width;

    context.drawImage(images["Head001"], 0, 10);
    context.drawImage(images["Body001"], 0, 20);
    context.drawImage(images["Legs001"], 0, 30);

}
window.addEventListener("load", InsertAllAssets, false);