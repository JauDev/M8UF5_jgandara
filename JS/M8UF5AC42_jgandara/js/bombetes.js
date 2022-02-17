//Bombetes

function llumoff(j) {
    j.src = "img/llumoff.gif";
}

function llumon(g) {
    g.src = "img/llumon.gif";
}

function llumbreak(s) {
    s.src = "img/llumbreak.gif";
}

//Números

document.addEventListener("keydown",numeros);
function numeros(u) {
    if(u.keyCode == 49) {
        document.getElementById('b1').src = "img/llumon.gif";
        document.getElementById('b2').src = "img/llumoff.gif";
        document.getElementById('b3').src = "img/llumoff.gif";
        document.getElementById('n1').innerHTML = "1";
        document.getElementById('n2').innerHTML = "";
        document.getElementById('n3').innerHTML = "";
    }else {
        document.getElementById('b1').src = "img/llumoff.gif";
        document.getElementById('b2').src = "img/llumoff.gif";
        document.getElementById('b3').src = "img/llumoff.gif";
        document.getElementById('n1').innerHTML = "";
        document.getElementById('n2').innerHTML = "";
        document.getElementById('n3').innerHTML = "";
    }
    if(u.keyCode == 50) {
        document.getElementById('b1').src = "img/llumoff.gif";
        document.getElementById('b2').src = "img/llumon.gif";
        document.getElementById('b3').src = "img/llumoff.gif";
        document.getElementById('n1').innerHTML = "";
        document.getElementById('n2').innerHTML = "2";
        document.getElementById('n3').innerHTML = "";
    }
    if(u.keyCode == 51) {
        document.getElementById('b1').src = "img/llumoff.gif";
        document.getElementById('b2').src = "img/llumoff.gif";
        document.getElementById('b3').src = "img/llumon.gif";
        document.getElementById('n1').innerHTML = "";
        document.getElementById('n2').innerHTML = "";
        document.getElementById('n3').innerHTML = "3";
    }
}