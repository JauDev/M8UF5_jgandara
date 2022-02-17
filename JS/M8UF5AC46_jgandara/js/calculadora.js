function numero(num) { 
    let resultat = document.getElementById("result");
    
    resultat.value = resultat.value + num; 
} 

function calcular() {
    let resultat = document.getElementById("result");
    
    resultat.value = eval (resultat.value);
}

function Borrar() {
    let resultat = document.getElementById("result");
    
    resultat.value = null; 
}