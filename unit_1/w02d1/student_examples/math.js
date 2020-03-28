let cartTotal = 16.07;

let roundedUpCart = Math.ceil(cartTotal);
let donation = roundedUpCart - cartTotal;
console.log(roundedUpCart);
console.log(donation.toFixed(2));
