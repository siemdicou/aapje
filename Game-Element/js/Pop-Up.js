var el;
var blanket;
function PopInit() {
    var blanket = g('blanket');

}
function toggle(div_id) {
    var el = g(div_id);
    if (el.style.display == 'none') {
        el.style.display = 'block';
    }
    else {
        el.style.display = 'none';
    }
}

function blanket_size(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
       viewportheight = window.innerHeight;
    } else {
        viewportheight = document.documentElement.clientHeight;
    }
    if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
        blanket_height = viewportheight;
    } else {
        if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
            blanket_height = document.body.parentNode.clientHeight;
        } else {
            blanket_height = document.body.parentNode.scrollHeight;
        }
    }
   // var blanket = document.getElementById('blanket');
    blanket.style.height = blanket_height + 'px';
    var popUpDiv = document.getElementById(popUpDivVar);
    popUpDiv_height = blanket_height / 2 - 200;
    popUpDiv.style.top = "100px";
    popUpDiv.style.left = "250px";
}

function popup(windowname) {
    blanket_size(windowname);
    //window_pos(windowname);
    toggle('blanket');
    toggle(windowname);
}