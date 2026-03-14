const ror2Game = {
    title: "Risk of rain 2",
    developer: "Hopoo Games",
    score: 10,
};

function Game(title, developer, score, owner) {
    this.title = title;
    this.title.developer = developer;
    this.score = score;
    this.owner = owner;
}

const game1 = new Game("Flat heroes", "Pararell Circles", 8);
const game2 = new Game("Move or die", "Those Awesome Guys", 6);

function Player(name, age) {
    this.name = name;
    this.age = age;
}

const rand = new Player("Randy Fernandez", 33);
const ken = new Player("Ken Rivera", 39);

game1.owner = rand;
game2.owner = ken;

/*const Ingeniero = {
    carrera: "civil",
    carreraEstudiada() {
        console.log(`estudió la carrera de ${this.carrera}`);
    },
    crearIngeniero(carrera) {
        this.carrera = carrera;
    },
};

const ingeniero1 = Object.create(Ingeniero);

const electricista1 = Object.create(Ingeniero);
electricista1.carrera = "eléctrico";

function hacerIngeniero(carrera) {
    let nuevoingeniero = Object.create(Ingeniero);
    nuevoingeniero.carrera = carrera;
    return nuevoingeniero;
}
const compu1 = new hacerIngeniero("computación");*/

class IngenieroClass {
  carrera = "civil";
  constructor(carrera) {
    if (carrera != null) {
      this.carrera = carrera;
    }
  }
  carreraEstudiada() {
    console.log(`estudió la carrera de ${this.carrera}`);
  }
}
let meca = new IngenieroClass("mecatrónica");

