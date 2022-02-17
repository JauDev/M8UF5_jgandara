var contingut = document.querySelector('#contingut')

function agafar() {

    fetch('https://randomuser.me/api/')

    .then(res => res.json())
    .then(data => {

    console.log(data.results['0'])
    contingut.innerHTML = `<div><img src="${data.results['0'].picture.large}"width="100px" class="img-fluid rounded-circle"><p>Nom: ${data.results['0'].name.last}</p></div>`
    })

}

localStorage.setItem("resposta1", "p1r1");
localStorage.setItem("resposta2", "p2r3");
localStorage.setItem("resposta3", "p3r2");
localStorage.setItem("resposta4", "p4r2");
localStorage.setItem("resposta5", "p5r1");
localStorage.setItem("resposta6", "p6r2");

function resposta(ç) {

    if(ç == localStorage.getItem("resposta1")) {

        alert("Resposta correcta");

    }else if(ç == localStorage.getItem("resposta2")) {

        alert("Resposta correcta");

    }else if(ç == localStorage.getItem("resposta3")) {

        alert("Resposta correcta");

    }else if(ç == localStorage.getItem("resposta4")) {

        alert("Resposta correcta");

    }else if(ç == localStorage.getItem("resposta5")) {

        alert("Resposta correcta");

    }else if(ç == localStorage.getItem("resposta6")) {

        alert("Resposta correcta");

    }else {

        alert("Resposta incorrecta");

    }

}