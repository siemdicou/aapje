function RightMouseClick() {
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            console.log("hi");
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function () {
            alert("You've tried to open context menu");
             window.event.returnValue = false;
        });
    }
}