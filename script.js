function calc() {
    
    let a = calcApple();
    let o = calcOrange();
    let b = calcBanana();
    
    let tot = a+o+b;
    let tax = tot * 0.05;

    alert("Total Bill is: ₹" + (tot+tax));

}

function calcApple() {
    const txtApple = document.getElementById("txtApple").value;
    const chkApple = document.getElementById("chkApple");

    let tot = 0;
    
    if(chkApple.checked)
    {
        tot += txtApple * 59;
    }

    return tot;
}

function calcOrange() {
    const txtOrange = document.getElementById("txtOrange").value;
    const chkOrange = document.getElementById("chkOrange");

    let tot = 0;

    if(chkOrange.checked)
    {
        tot += txtOrange * 49;
    }
    return tot;
}
function calcBanana() {
    const txtBanana = document.getElementById("txtBanana").value;
    const chkBanana = document.getElementById("chkBanana");
    
    let tot = 0;

    if(chkBanana.checked)
    {
        tot += txtBanana * 39;
    }

    return tot;

}