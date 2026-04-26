const btnTimido = document.querySelector("#btnSaludo");


function saludo() {
    console.log("Bienvenido, ¡qué gusto verte!");
}


btnTimido.onclick = saludo;

function pensamiento() {
    console.log("uff… espero que no haga clic");
}


function pensamiento2() {
    console.log("ya pasó el peligro ");
}


btnTimido .onmouseenter = pensamiento;
//mouseleave funciona similar, si se entra a un elemento hijo no se dice que salió
btnTimido .onmouseout = pensamiento2;

const btnAmigable = document.querySelector("#btnAmigable");
btnAmigable.onclick = saludo;

const botonEvento = document.querySelector("#lisen");
botonEvento.addEventListener("click", function () {
    alert("PUTO EL QUE LO LEA!");
});

function makeItRed(boton) {
    boton.classList.toggle("backRed");
}
botones = document.querySelectorAll("button.squared");

for (let boton of botones) {
    switch (boton.id) {
        case "btn1":
        case "btn3":
        case "btn4":
            boton.addEventListener("click", () => makeItRed(boton));
            break;
        default:
            console.log(`${boton.id} no dentro de los casos`);
    }
} 

function makeItBlue() {
    this.classList.toggle("backBlue");
}
function makeItSmall() {
    this.classList.toggle("beSmol");
    this.classList.toggle("squared");
}

const input = document.querySelector("#keycodes");


input.addEventListener("keydown", function (e) {
    console.log("Se presionó:" + e.key);
});


input.addEventListener("keyup", function (e) {
    console.log("Se soltó la tecla con código:" + e.code);
});


for (let boton of botones) {
    switch (boton.id) {
        case "btn1":
            boton.addEventListener("click", () => makeItRed(boton));
            boton.addEventListener("click", makeItSmall);
            break;
        case "btn2":
            boton.addEventListener("click", makeItBlue);
            break;
        case "btn3":
        case "btn4":
            boton.addEventListener("click", () => makeItRed(boton));
            break;
        case "btn5":
            boton.addEventListener("click", makeItBlue);
            boton.addEventListener("click", makeItSmall);
            break;
        default:
            console.log(`${boton.id} no dentro de los casos`);
    }
}

const formularioForo = document.querySelector("#foro");
const listaComs = document.querySelector("#comms");

formularioForo.addEventListener("submit", function (e) {
    e.preventDefault();
    if (com.value != "") {
        listaComs.append(comentar(usuario.value, com.value));
        com.value = "";
    }

});//quitarlo para seguir agregando código

const usuario = formularioForo.elements.usuario;
const com = formularioForo.elements.com;

const comentar = (usuario, com) => {
    const nuevoUsuario = document.createElement("b");
    nuevoUsuario.append(usuario);
    const nuevoCom = document.createElement("li");
    nuevoCom.append(nuevoUsuario);
    nuevoCom.append(`: ${com}`);
    return nuevoCom;
};

const inputEvt = document.querySelector("#inputEvent");
inputEvt.addEventListener("change", function (e) {
    console.log("El input es:" + inputEvt.value);
});


const h3 = document.querySelector("h3");
inputEvt.addEventListener("input", function (e) {
    h3.innerText = inputEvt.value;
});

inputEvt.addEventListener("paste", (e) => {
    e.preventDefault();
    inputEvt.value = "";
});

const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");


button.addEventListener("click", function (e) {
    button.style.backgroundColor = makeRandColor();
    e.stopPropagation();
});


container.addEventListener("click", function () {
    container.style.backgroundColor = makeRandColor();
});


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const lis = document.querySelectorAll("li");
for (let li of lis) {
    li.addEventListener("click", makeItBlue);
}

//const listaComs = document.querySelector("#comms");
listaComs.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  // Si el click no ocurrió dentro de un <li>, no hacemos nada
  if (!li) return;
  makeItBlue.call(li);
});
