console.log('review.js is connected');
// ==================================== HERO CLASS
class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = [
      {
        name: "sprinkle spray",
        hp: 5
      },
      {
        name: "sugar shock" ,
        hp: 10
      }
    ];
    this.catchPhrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
    ];
  }
  randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length)
  }
  talkSass() {
    console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]);
  }
  announceHealth() {
    console.log(`${this.name}'s current health is at ${this.health}`);
  }
  randomWeapon() {
    return this.weapons[this.randomNumGenerator(this.weapons)];
  }
  fight(enemy) {
    let weapon = this.randomWeapon();
    enemy.health -= weapon.hp;
    console.log(`${this.name} used ${weapon.name}, it hits ${enemy.name} for ${weapon.hp}`);
  }
}

// instantiating dougie
const dougie = new Hero('Dougie the Donut');

// ==================================== ENEMY CLASS
class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]
  }
  randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length)
  }
  talkSmack() {
    console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]);
  }
  announceHealth() {
    console.log(`${this.name}'s current health is at ${this.health}`);
  }
  fight(enemy) {
    enemy.health -= this.weapons.pepperoniStars;
    console.log(`${this.name} used ${Object.keys(this.weapons)[0]}, it hits ${enemy.name} for ${this.weapons.pepperoniStars}`);
  }
}

// instantiating pizza rat
const pizzaRat = new Enemy('Pizza Rat');

// ==================================== WALKING DOWN THE STREET
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// ==================================== FIGHT
dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();
