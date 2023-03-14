'use strict';

/****************
Understand Strict
****************/
// let hasDriversLicense = false;
// const passTest =  true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('Ok');


/****************
Functions
****************/
// function logger() {
//     console.log('Inside a Function');
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// let juice = fruitProcessor(2,5);
// console.log(juice);

// //function declaration - can be called before declaration
// function calcAge1 (birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calcAge1(2001));

// //function expression
// const calcAge2 = function(birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calcAge2(2001));

// //Arrow function
// const calcAge3 = (birthYear) => 2023 - birthYear;
// console.log(calcAge3(2001));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// const retires = yearsUntilRetirement(2001, 'Ricardo');
// console.log(retires);

// //function calling function
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

/****************
Code Challenge 01
****************/
// //this way (single expression) the return is automatic
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//     let winner;
//     if (avgDolphins >= avgKoalas*2) {
//         winner = `Dolphins win (${avgDolphins}, ${avgKoalas})`
//     } else if (avgKoalas >= avgDolphins*2){
//         winner = `Koalas win (${avgKoalas}, ${avgDolphins})`
//     } else {
//         winner = 'No Winner'
//     }
//     return winner;
// }

// const dolAverage = calcAverage(85,23,71);
// const kolAverage = calcAverage(65,54,49);
// console.log(checkWinner(dolAverage,kolAverage));

/****************
Arrays
****************/
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//other way of creating arrays
const years = new Array(1991,1992,2001,2023);

console.log(friends.length);
console.log(friends[friends.length - 1]); //last element
console.log(friends[2]); //last element also

friends[2] = 'Jay';
console.log(friends);
