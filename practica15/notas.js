/*function rollDice(numSides = 6) {
    console.log(Math.floor(Math.random() * numSides) + 1);
}

console.log(Math.max(...numbers));

const mexicanDogs = ["Chihuahua", "Calupoh"];
const cuteDogs = ["Husky", "Akita", "Samoyedo"];
const allDogs = [...mexicanDogs, ...cuteDogs];

const {
    email,
    password: userPassword,
    username,
    id = 0,
    isAdmin = false,
} = newUserForm;
*/

const nums = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];

const [primero, segundo, ...resto] = nums;



const ingeniero = { id: 451324, job: "electric", lastName: "Meza" };
const persona = { id: 451324, firstName: "Hernan", lastName: "Mesa" };
const trabajador = { ...ingeniero, ...persona };

const { firstName: nombre, job, id = 0, lastName: apellido, age:edad = 0 } = trabajador;

function printData({ firstName: fname, lastName: lname }) {
  return `Trabajador:${fname} :${lname}`;
}
