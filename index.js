const flip = (event, footer, tittle) => {
    var element = event.currentTarget

    if (element.style.transform == 'rotateY(180deg)') {
        element.style.transform = 'rotateY(0deg)'
        document.getElementById(footer).style.opacity = '70%'
        document.getElementById(tittle).style.opacity = '100%'
    } else {
        element.style.transform = 'rotateY(180deg)'
        document.getElementById(footer).style.opacity = '0%'
        document.getElementById(tittle).style.opacity = '0%'
    }
}

function mostrarForm() {

    let formu = document.getElementById("form");
    formu.classList.replace('conteinerForm', 'mostrarForm');
}
let cambiarClase = document.querySelectorAll('.cambiarClase');
for (const i of cambiarClase) {
    i.addEventListener('click', function() {
        mostrarForm();
    });
}