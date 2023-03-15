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
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //other way of creating arrays
// const y = new Array(1991,1992,2001,2020);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); //last element
// console.log(friends[2]); //last element also

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Ricardo'
// const ricardo = [firstName, 'Silva', 2023 - 2001, 'student',friends]
// console.log(ricardo);

// //Exercise
// const calcAge = (birthYear) => 2023 - birthYear;
// const years = [1990,1967,2001,2010];

// const age1 = calcAge(years[years.length - 1]);
// console.log(age1);
// let ageCalculated = years.map(calcAge);
// console.log(ageCalculated);

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay'); //add in the end
// console.log(friends);

// friends.unshift('John'); //add in the beginning
// console.log(friends);

// friends.pop() //removes the last element
// console.log(friends);
// friends.shift(); //removes the first element
// console.log(friends);

// console.log(friends.indexOf('Michael')); //returns index of element
// console.log(friends.indexOf('Bob')); //returns -1 when element doesn't exist
// console.log(friends.includes('Michael')); //returns true or false


/****************
Code Challenge 02
****************/
// const bills = [125,555,44];
// const tips = [];
// const total = [];

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         tips.push(bill*0.15);
//         total.push(bill + tips[tips.length - 1]);
//     } else {
//         tips.push(bill*0.2);
//         total.push(bill + tips[tips.length - 1]);
//     }
// }

// bills.map(calcTip);
// console.log(bills, tips, total);



/****************
Objects
****************/
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     age: 2023-1991,
//     job: 'student',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// // const answer = prompt('What you want to know?');
// // console.log(jonas[answer]);

// jonas.location = 'Portugal'
// jonas.twitter = '@username'
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
    
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(jonas.getSummary());


/****************
Code Challenge 03
****************/
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miler',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height**2);
//         return this.bmi;
//     }
// }
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height**2);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (john.bmi > mark.bmi) {
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
// } else {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
// }


/****************
For Loop
****************/
// for (let i = 1; i <= 10; i++) {
//     console.log(`Repetition number ${i}`);
// }

// const ricardo = [
//     'Ricardo', 
//     'Silva', 
//     2023 - 2001,
//     'student',
//     ['Michael', 'Peter', 'John']
// ];

// const types = [];

// for (let i = 0; i < ricardo.length; i++) {
//     types.push(typeof ricardo[i]);
// }
// console.log(types);

// //only strings - skip other types
// for (let i = 0; i < ricardo.length; i++) {
//     if (typeof ricardo[i] !== 'string') continue;
//     console.log(typeof ricardo[i]);
// }

// //break loop when number is find
// for (let i = 0; i < ricardo.length; i++) {
//     if (typeof ricardo[i] === 'number') break;
//     console.log(typeof ricardo[i]);
// }

// //backwards loop
// for (let i = ricardo.length - 1; i >= 0; i--) {
//     console.log(i, ricardo[i]);
// }

// for (let i = 1; i <= 2; i++) {
//     console.log(`----- Exercise number ${i}`);
//     for (let x = 1; x <= 3; x++) {
//         console.log(`Repetition number ${x}`);
//     }
// }

// //while loop
// let rep = 1;
// while (rep <= 5) {
//     console.log(`Repetition number ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`Rolled a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is ending');
// }


/****************
Code Challenge 04
****************/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill*0.15;
    } else {
        return bill*0.2;
    }
}

for (let i = 0; i < bills.length; i++) {
    const element = bills[i];
    tips.push(calcTip(element));
    totals.push(tips[i]+element);
}

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));
