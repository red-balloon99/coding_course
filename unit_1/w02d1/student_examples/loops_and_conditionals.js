console.log('loopy conditiionally');

let sum = 0;

for (let i = 0; i < 10; i+= 2) {
  console.log(i);
  sum += i;
  // if (i % 2 === 0) {
  //   console.log(i + ' is even');
  //   sum += i;
  // }
}

console.log(sum);
