let toplayer = "layer3";
function mover(toTop) {
    let oldTop = document.getElementById(toplayer).style;
    let newTop = document.getElementById(toTop).style;

    oldTop.zIndex = "0";
    newTop.zIndex = "10";

    toplayer = document.getElementById(toTop).id;
    
}