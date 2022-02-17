function comprovar(){
    if(document.getElementById('usuari').value == "Ibai") {
        if(document.getElementById('psswd').value == "1234") {
            if(document.getElementById('psswd').value == document.getElementById('confpsswd').value) {
                alert("És correcte, pot continuar!");
            }else{
                alert("Assegurat que l'usuari o contrasenya són correctes");
            }
        }else{
            alert("Assegurat que l'usuari o contrasenya són correctes");
        }
    }else{
        alert("Assegurat que l'usuari o contrasenya són correctes");
    }
}