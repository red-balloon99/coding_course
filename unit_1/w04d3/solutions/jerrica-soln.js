// Create a Hamster class

class Hamster {
  constructor (name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price
  }
}

// Create a Person class

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    console.log('name: ', this.name);
  }
  getAge() {
    console.log('current age: ', this.age);
  }
  getWeight() {
    console.log('current weight: ', this.weight);
  }
  greet() {
    console.log('greetings ' + this.name);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}


// Create a Story

// instantiate a new person named timmy
const timmy = new Person('Timmy');

// age timmy five years
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.getAge();

  // -- alternatively, use a loop to keep things DRY!
  // for(let i = 0; i < 5; i++) {
  //   timmy.ageUp();
  // }
  // timmy.getAge();

// have timmy eat five times
for(let i = 0; i < 5; i++) {
  timmy.eat();
}
timmy.getWeight();

// have timmy exercise five times
for(let i = 0; i < 5; i++) {
  timmy.exercise();
}
timmy.getWeight();

// age timmy nine years
for(let i = 0; i < 9; i++) {
  timmy.ageUp();
}
timmy.getAge();

// create a hamster named gus
const gus = new Hamster('Gus');

// set gus' owner to timmy
gus.owner = 'Timmy';
console.log(gus);

// have timmy buy gus
timmy.buyHamster(gus);
console.log('timmy\'s hamsters: ', timmy.hamsters);

// age timmy 15 years
for(let i = 0; i < 15; i++) {
  timmy.ageUp();
}
timmy.getAge();

// have timmy eat twice
for(let i = 0; i < 2; i++) {
  timmy.eat();
}
timmy.getWeight();

// have timmy exercise twice
for(let i = 0; i < 2; i++) {
  timmy.exercise();
}
timmy.getWeight();
