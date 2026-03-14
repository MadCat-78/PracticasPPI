console.log("Hola mundo =)");

let myArr = new Array();
myArr[0] = new Array();
myArr[0][0] = new Array();
myArr[0][0][0] = "new Array()";
myArr[0][0][1] = "otra string";
 
let items = [1, 2, 3];
 
let items2D = [
  [1, 2],
  [3, 4],
  [5, 6],
];
 
let items3D = [
  [
    [1.1, 2.1],
    [3.1, 4.1],
    [5.1, 6.1],
  ],
  [
    [1, 2, 7],
    [3, 4, 8],
    [5, 6, 9],
  ],
  [
    [1.2, 2.2],
    [3.2, 4.2],
    [5.2, 6.2],
  ],
];
console.log(items3D[2][0][0]);

let num = 1;
while (num <= 5) {
  console.log(`while ${num}`);
  num++;
}

for (let i=1; i<=5; i++){ 
    console.log(`for ${i}`);
}

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    console.log(`nestedfor ${i},${j}`);
  }
}

let iterable = [10, 20, 30, 40, 50];
let suma = 0;
for (let value of iterable) {
  console.log(`iterable val ${value}`);
  suma += value;
}
console.log(suma);

const myobj = { a: 1, b: 2, c: 3, zapato: "Grande" };
for (let prop in myobj) {
  console.log(`propiedad: ${prop} = ${myobj[prop]}`);
}

let cadena ="Hola mundo".toUpperCase();
for(let letra of cadena){
    console.log(letra);
}


function capitalizeFirst(word) {
  //GLOBAL
  return word[0].toUpperCase() + word.slice(1);
}

let square = function (num) {
  return num * num;
};
