const NACIONALIDADES_ACEPTADAS = [
    { key: 'AU', name: "Australia" },
    { key: 'BR', name: "Brasil" },
    { key: 'CA', name: "Canadá" },
    { key: 'CH', name: "Suiza" },
    { key: 'DE', name: "Alemania" },
    { key: 'DK', name: "Dinamarca" },
    { key: 'ES', name: "España" },
    { key: 'FI', name: "Finlandia" },
    { key: 'FR', name: "Francia" },
    { key: 'GB', name: "Reino Unido" },
    { key: 'IE', name: "Irlanda" },
    { key: 'IN', name: "India" },
    { key: 'IR', name: "Irán" },
    { key: 'MX', name: "México" },
    { key: 'NL', name: "Países Bajos" },
    { key: 'NO', name: "Noruega" },
    { key: 'NZ', name: "Nueva Zelanda" },
    { key: 'RS', name: "Serbia" },
    { key: 'TR', name: "Turquía" },
    { key: 'UA', name: "Ucrania" },
    { key: 'US', name: "Brasil" },
];

window.onload = function () {
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");

    for (let input of inputs) {
        input.onfocus = resaltar;

        input.addEventListener("blur", noResaltar);
    }

    for (let select of selects) {
        select.onfocus = resaltar;
        select.addEventListener("blur", noResaltar);
    }

    llenarNacionalidad();
}

function resaltar(evento) {
    evento.target.classList.add("selected");
    resaltarLabel(evento);
}

function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }

    noResaltarLabel(evento);
}

function resaltarLabel(evento) {
    const input = evento.target;
    const labels = document.getElementsByTagName("label");
    
    for (let label of labels) {
        if (label.getAttribute("for") === input.id) {
            label.classList.add("selected");
        }
    }
}

function noResaltarLabel(evento) {
    const input = evento.target;
    const labels = document.getElementsByTagName("label");
    
    for (let label of labels) {
        if (label.getAttribute("for") === input.id) {
            const clase = label.classList.contains("selected");
            if (clase) {
                label.classList.remove("selected");
            }
        }
    }
}

function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}

function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");

    for (let { key, name } of NACIONALIDADES_ACEPTADAS) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}