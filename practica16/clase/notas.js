document.getElementById("changeId").value = "mexican_dogs";
document.querySelector("#changeId").value = "breeds";

function obtenerPorId() {
    let elemtoChange = document.querySelector("#changeId");
    try {
        let elem = document.querySelector("#"+elemtoChange.value);
        if (elem.style.color == "blue") elem.style.color = "black";
        else elem.style.color = "blue";
    } catch {
        console.log(`El id ${elemtoChange.value} no existe`);
    }
}

function obtenerPorTag() {
    let elems = document.getElementsByTagName("img");
    for (let elem of elems) {
        elem.src =
            "https://play-lh.googleusercontent.com/s1BhHTaL7gDOQ__wjeSQM_EGChHMafMfTlm6-KG8eXMRFWyjVjopbwLK41dA30ndtQ=s256";
    }
}

document.querySelector("#changeClass").value = "ext";
var classActive = false;
function obtenerPorClase() {
    let elemtoChange = document.querySelector("#changeClass");
    let elems = document.querySelectorAll("."+elemtoChange.value);
    for (let elem of elems) {
        if (classActive) elem.style.color = "black";
        else elem.style.color = "red";
    }
    classActive = !classActive;
}

let secondChildList = document.querySelectorAll('li:nth-child(2)')
    for(let item of secondChildList)
        item.style.color='yellow'

function cambiarJS(){
    document.querySelector("p.all").innerText
    document.querySelector("p").innerText = "Soy un texto modificado";
    console.log(document.querySelector("p.all").textContent);

}

document.querySelector("input").type = "password";

