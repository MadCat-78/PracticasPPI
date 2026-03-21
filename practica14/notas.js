const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },

  {
    title: "Spider-Man",
    score: 90,
    year: 2002,
  },
  {
    title: "coraline",
    score: 100,
    year: 2009,
  },
  {
    title: "Soy leyenda",
    score: 80,
    year: 1999,
  },
  {
    title: "Avatar",
    score: 96,
    year: 2009,
  },
  {
    title: "contra lo imposible",
    score: 100,
    year: 2016,
  },

  {
    title: "El santos vs las momias de Guanajuato",
    score: 95,
    year: 1972,
  },
  {
    title: "Cars ",
    score: 100,
    year: 2006,
  },
  {
    title: "El conjuro",
    score: 99,
    year: 201,
  },
  {
    title: "Madagascar",
    score: 55,
    year: 2005,
  },
  {
    title: "Pacific rim",
    score: 75,
    year: 2013,
  },
  {
    title: "Pulp Fiction",
    score: 92,
    year: 1994,
  },
  {
    title: "Interstellar",
    score: 87,
    year: 2014,
  },
  {
    title: "Revenant",
    score: 88,
    year: 2016,
  },
  {
    title: "DUNE",
    score: 98,
    year: 2021,
  },
];



/*
const badMovies = movies.filter((m) => m.score < 70);
const recentMovies = movies.filter((m) => m.year > 2000);
const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map((m) => m.title);
    //Mapeando las peliculas buenas para ver los títulos en una sola línea
const wishlistMovies = movies.filter((m) => m.score > 80).map((m) => m.title);

const oldMovies = movies
    .filter(m => m.year < 2000)
    .filter(m =>  m.score>75)
    .map((m) => [m.title,m.year]);

const oldMovies = movies
    .filter(m => m.year < 2000)
    .filter(m =>  m.score>75)
    .map((m) => ({title: m.title,year: m.year}));

const inputs = ["Juan", "Perez", ""];
const isValid = inputs.inputs.every((inp) => inp != "");

const numbers = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];


var sumatodo = numbers.reduce((a, b) => a + b);

var mayordivisible = numbers.reduce((a, b) => {
    if (b % 3 == 0) {
        if (b > a) return b;
        else return a;
    } else return a;
}, -1);

const redusers = [
  { name: "Ana", role: "admin", age: 28, active: true },
  { name: "Luis", role: "user", age: 22, active: true },
  { name: "Carlos", role: "admin", age: 35, active: false },
  { name: "María", role: "user", age: 19, active: true },
  { name: "Pedro", role: "moderator", age: 30, active: true },
  { name: "Sofía", role: "user", age: 25, active: false },
  { name: "Jorge", role: "moderator", age: 40, active: true },
  { name: "Lucía", role: "admin", age: 31, active: true }
];


const grouped = redusers.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }


  acc[user.role].push(user);


  return acc;
}, {});

const dotimeout = () => {
    console.log("HELLO!!!...");
    setTimeout(() => console.log("...are you still there?"), 3000);
    console.log("GOODBYE!!");
};

setInterval(() => {
    console.clear()
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);

console.log(grouped);
*/

