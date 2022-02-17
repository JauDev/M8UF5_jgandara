function confirmar() {
    
    if(localStorage.getItem('Nom') == document.getElementById('nom')) {

            window.open('web/trivial-api.htm');

    }else if(document.getElementById('edat').value >= 18) {

            localStorage.setItem('Nom', document.getElementById('nom'));
    
            window.open('web/trivial-api.htm');
    
        }else {
    
            alert('Aquesta pàgina està restringida a menors de 18 anys')
    
        }

}

function esborrar() {

    localStorage.clear();

    alert('Dades anteriors esborrades')
    
}