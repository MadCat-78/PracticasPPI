const numIntentos=10;

let signosChinos = ["Mono","Gallo","Perro","Cerdo","Rata","Buey","Tigre","Conejo","Dragón",
                    "Serpiente","Caballo","Cabra"];

let calculaSigno=function(){
    let anio=parseInt(prompt("¿Cual es tu anio de nacimiento chino?"));
    let signo=signosChinos[anio%12];
    console.log(`Tu sgno chino es ${signo}`);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let adivinaNum = function () {
  let numeroPorAdivinar=getRandomIntInclusive(1,100);
  let intento=parseInt(prompt("Adivina el numero que tengo entre 1 y 100"));
  console.log(numeroPorAdivinar);
for(let i=1; i<numIntentos; i++){
    if(intento==numeroPorAdivinar){
        console.log("Felcidades, adinivaste :D");
        break;
    }else{
        intento=parseInt(prompt("No es. Intenta otra vez"));
    }
}

};


