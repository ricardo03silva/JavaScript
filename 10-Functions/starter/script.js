'use strict';

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     // alert('Checked in');
//   } else {
//     // alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight); //is passed by value
// console.log(jonas); //is passed by refence (it's a object)
// //checkIn changes 'jonas' value but not flight value

// const flightNum = flight; //copies the value
// const passenger = jonas; //copies the reference

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //function returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greet('Hello')('Ricardo');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hello')('Ricardo');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// //the call method
// //the 'this' keyword will refer to the first argument we pass
// book.call(eurowings, 23, 'Sarah');
// book.call(lufthansa, 74, 'John');
// book.call(swiss, 56, 'Mike');
// const flightData = [583, 'George Cooper'];
// book.call(swiss, ...flightData);
// console.log(eurowings);
// console.log(lufthansa);
// console.log(swiss);

// //the bind method
// //returns a function with 'this' binded to what we want
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa, 128);
// bookEW(32, 'Ana');
// bookLH('Manu');
// bookLH('Sarah');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //null because we don't have any 'this' keyword
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(50));

// //Challenge 01
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//         if (typeof answer === 'number' && answer < this.answers.length) {
//             this.answers[answer]++;
//         }
//         this.displayResults('array');
//         this.displayResults('string');
//     },
//     displayResults(type) {
//         if (type === 'string') {
//             console.log(`Poll Results are ${this.answers.join(', ')}`);
//         } else if (type === 'array') {
//             console.log(this.answers);
//         }
//     },
// };

// const btnPoll = document.querySelector('.poll');
// btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// //Data 1: [5, 2, 3]
// //Data 2: [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//Immediately Invoked Function Expressions (IIFE)
// (function () {
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();
