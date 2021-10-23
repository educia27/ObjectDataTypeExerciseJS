let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 0,
    move: function () {return Math.floor(Math.random()*11);}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {return Math.floor(Math.random()*11);}
};


let chimpy = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 4,
  move: function () {return Math.floor(Math.random()*11);}
}

let beagleBoi = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 6,
  move: function () {return Math.floor(Math.random()*11);}
}

let tardiBoi = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 8,
  move: function () {return Math.floor(Math.random()*11);}
  

};

console.log(tardiBoi.move);


// Create an array to hold the animal objects.
let crew = [(superChimpOne, salamander, chimpy, beagleBoi, tardiBoi)]
console.log(crew);
// Print out the relevant information about each animal.
const crewReports = (animal) => {
  for (animal[0] in crew) {
    console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}. `)
  }
}
crewReports(chimpy);
// Start an animal race!

function fitnessTest(crew) {
  const results = []
  for (lope of crew) {
    let numSteps = 0;
    let turns = 0;
    while(numSteps < 20) {
      numSteps += lope.move();
      turns++
    }
    results.push(`${lope.name} took ${turns} turns to take 20 steps`)
  }
  return results;
}
fitnessTest(crew);
