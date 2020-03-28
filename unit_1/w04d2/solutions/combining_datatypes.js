// Create an object that has a property that is an array. Log one of the elements of that array.

const kitKat = {
  bars: [1, 2, 3, 4]
};
console.log(kitKat.bars[0]);
//
// Create an object that has a property that is an object. Log one of the properties of that inner object.
//
const bottle = {
  cap: {
    color: 'white',
    type: 'twist off'
  }
};

console.log(bottle.cap.type);
// Create an array that has an object in it. Log one of the properties of that object.
const parkingSpots = [
  {
    type: 'sedan',
    color: 'cosmic chocolate'
  },
  {
    type: 'minivan',
    color: 'stardust blue'
  }
];

console.log(parkingSpots[1].color);
// Create an array that has an array as one of its elements. Log one of the elements of the inner array.
const twoDGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(twoDGrid[1][2]);
// Create an array that has a function as one of its elements. Call that function.
const powerDrillAttatchments = [() => { return 'safety dance'; }];
console.log(powerDrillAttatchments[0]());
// Create an object that has a property that is an array. Loop over the array and log each individual element.
const dwarfCottage = {
  residents: [
    'Grumpy',
    'Happy',
    'Sleepy',
    'Bashful',
    'Sneezy',
    'Dopey',
    'Doc'
  ]
};

dwarfCottage.residents.forEach(resident => console.log(resident));

// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
twoDGrid.forEach(row => row.forEach(item => console.log(item)));

// Create a function that returns an object. Log a value of that object (hint: call the function and then call a property on the return value).
const sodaDispenser = () => {
  return {
    cold: true,
    caffienated: false
  };
};

console.log(sodaDispenser().caffienated);
// Create a function that returns an array. Log an element of the array.
const brakes = () => {
  return [
    'front left wheel', 'front right wheel', 'back left wheel', 'back right wheel'
  ];
};

console.log(brakes()[2]);

// Create a function that returns an object that has an array. Log one of the elements of that array.
const powerTool = () => {
  return {
    drillBits: [1, 2, 3],
    safety: 'on'
  };
};

console.log(powerTool().drillBits[1]);
// Create a function that returns an object that has an object. Log one of the properties of the inner object.

// Create a function that returns a function. Call that inner function

// Create an array that has a function that returns an object. Log a property of the object.

// Create an array that has a function that returns an object that has an array. Log an element of the inner array.

// Create an array that has a function that returns an object that has an object. Log a property of the inner object.

// Create an array that has a function that returns a function. Call the inner function.

// Model a vending machine

const vendingMachine = {
  snacks: [
    {
      name: 'kitkat',
      price: 6
    },
    {
      name: 'sun chips',
      price: 7
    },
    {
      name: 'apple',
      price: 12
    }
  ],
  vend (input) {
    console.log('vending', vendingMachine.snacks[input]);
  }
};

vendingMachine.vend(1);

// Callbacks Operate Nums

const operateNums = (num, operation) => {
  return operation(num);
};

const multiplyByTwo = num => num * 2;

const squareNum = num => num * num;

console.log(operateNums(2, multiplyByTwo));
console.log(operateNums(3, squareNum));

//  Fix function definition placement, definitions before invokation

// const bar = () => {
//   console.log('bar here');
// };
//
// const foo = () => {
//   console.log('foo here');
// };
//
// bar();
// foo();

// SyntaxError: Missing initializer in const declaration
// forgot equal sign between foo and ()
const foo = () => {
  console.log('hi');
};

foo();
