function comprovar(){
    if(document.getElementById('psswd').value == document.getElementById('confpsswd').value) {
        if(document.getElementById('psswd').value == sessionStorage.getItem('Contrasenya')) {
            alert("És correcte, pot continuar!");
        }else{
            alert("Assegurat que l'usuari o contrasenya són correctes");
        }
    }else{
        alert("Assegurat que l'usuari o contrasenya són correctes");
    }
}

function guardar() {
    sessionStorage.setItem('Usuari', document.getElementById('usuari').value);
    sessionStorage.setItem('Contrasenya', document.getElementById('psswd').value);
    sessionStorage.setItem('Nom', document.getElementById('nom').value);
    sessionStorage.setItem('Cognom', document.getElementById('cognom').value);

    document.getElementById('usuari').value = null;
    document.getElementById('psswd').value = null;
    document.getElementById('confpsswd').value = null;
    document.getElementById('nom').value = null;
    document.getElementById('cognom').value = null;

    alert('Guardat');
}

function recuperar() {
    document.getElementById('usuari').value = sessionStorage.getItem('Usuari');
    document.getElementById('psswd').value = sessionStorage.getItem('Contrasenya');
    document.getElementById('confpsswd').value = sessionStorage.getItem('Contrasenya');
    document.getElementById('nom').value = sessionStorage.getItem('Nom');
    document.getElementById('cognom').value = sessionStorage.getItem('Cognom');
}

function esborrar() {
    sessionStorage.clear();

    document.getElementById('usuari').value = null;
    document.getElementById('psswd').value = null;
    document.getElementById('confpsswd').value = null;
    document.getElementById('nom').value = null;
    document.getElementById('cognom').value = null;

    alert('Esborrat');
}