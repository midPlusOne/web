let toplayer = "layer3";
function mover(toTop) {
    let oldTop = document.getElementById(toplayer);
    let newTop = document.getElementById(toTop);

    oldTop.style.zIndex = "0";
    newTop.style.zIndex = "10";

    toplayer = newTop.id;
    
}