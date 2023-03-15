//**********************************
// Introduction
//**********************************
// console.log("Hello World");

// //Values and Variables
// let firstName = 'Jonas';
// console.log(firstName);


//**********************************
// Data Types - Primitive or Objects
//**********************************
// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof jsIsFun);

// jsIsFun = 'Ricardo';
// console.log(typeof jsIsFun);

// jsIsFun = 22;
// console.log(typeof jsIsFun);

// let exp;
// console.log(typeof exp);
// console.log(typeof null);

//const cannot be changed further (error)
//always needed to initialize const
//let can be changed and initialized later
//var is not used anymore (use let instead)


//**********************************
// Operators
//**********************************
// const ageJonas = 32;
// console.log(ageJonas);

// const birthYear = 1991;
// let currentYear = 2023;
// console.log(currentYear - birthYear);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Smith';
// console.log(firstName + ' ' + lastName);

// //Comparison operators
// const ageJonasNumber = '32';
// console.log(ageJonas == ageJonasNumber); //compara valor => true
// console.log(ageJonas === ageJonasNumber); //compara o tipo de variável => false


//**********************************
// Code Challenge #01
//**********************************
// let markHigherBMI;

// //Data 1 => gives markHigherBMI true
// let markHeight = 1.69;
// let markMass = 78;
// let johnHeight = 1.95;
// let johnMass = 92;

// //Data 2 => gives markHigherBMI false
// markHeight = 1.88;
// markMass = 95;
// johnHeight = 1.76;
// johnMass = 85;

// let markBMI, johnBMI;
// markBMI = (markMass / markHeight **2);
// johnBMI = (johnMass / johnHeight **2);

// markHigherBMI = (markBMI > johnBMI);
// console.log(markBMI, johnBMI, markHigherBMI);


//**********************************
// Strings and Template Literals
//**********************************
// const firstName = "Ricardo";
// const job = "student";
// const birthYear = 2001;
// const year = 2023;

// const ricardo = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
// console.log(ricardo); 

// //Template String
// const ricardoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(ricardoNew);

// console.log(`String
// with
// multiple lines`);


//**********************************
// if else statements
//**********************************
// const age = 18;
// if (age >= 18) {
//     console.log('Old Enough');
// } else {
//     let yearsLeft = 18 - age;
//     console.log(`${yearsLeft} years to be old enough`);
// }


//**********************************
// Code Challenge #02
//**********************************
//Data 1
// let markHeight = 1.69;
// let markMass = 78;
// let johnHeight = 1.95;
// let johnMass = 92;

// let markBMI = (markMass / markHeight **2);
// let johnBMI = (johnMass / johnHeight **2);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }


//**********************************
// Type Conversion and Coercion
//**********************************
// //conversion
// const inputYear = "1991";
// console.log(inputYear + 18); //this creates the string 199118
// console.log(Number(inputYear), inputYear); //1991 '1991'
// console.log(Number(inputYear) + 18); //2009
// console.log(String(19)); //19 as string

// //coercion: auto conversions from JS
// console.log('I am '+ 23 + ' years old'); //converst 23 to a string automatically
// console.log('23' - '10' - 3); //10, JS converts strings to numbers but not numbers to strings

// let n = '1' + 1; //'11'
// --n; //'10'
// console.log(n); //10


//**********************************
// Truty and Falsy values
//**********************************
//5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

//0 and 1 are like false and true in conditions


//**********************************
// Equality operators
//**********************************
// const age = 18;
// //with 3= the types need to be equal
// //always use ===
// if (age === '18') {
//     console.log('True');
// } else {
//     console.log('False');
// }

// if (age == 18) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// let fav = prompt("Whats you fav number?");
// fav = Number(prompt("Whats you fav number?"));
// console.log(fav); //comes as a string
// if (fav === 10) {
//     console.log('same type');
// } else {
//     console.log('not same type');
// }


//**********************************
// Boolean
//**********************************
// let hasLicense = true;
// let hasVision = true;
// console.log(hasLicense && hasVision); //true true - true
// hasVision = false;
// console.log(hasLicense && hasVision); //true false - false
// console.log(hasLicense || hasVision); // - true
// console.log(!hasLicense || hasVision); //false false - false



//**********************************
// Code Challenge #03
//**********************************
// let dolScore1 = 97;
// let dolScore2 = 112;
// let dolScore3 = 101;
// let kolScore1 = 109;
// let kolScore2 = 95;
// let kolScore3 = 106;

// let dolAverage = (dolScore1 + dolScore2 + dolScore3) / 3;
// console.log(dolAverage);
// let kolAverage = (kolScore1 + kolScore2 + kolScore3) / 3;
// console.log(kolAverage);

// if (dolAverage === kolAverage && dolAverage >= 100 && kolAverage >= 100) {
//     console.log('Draw');
// } else if (dolAverage > kolAverage && dolAverage >= 100) {
//     console.log('Dolphins');
// } else if (kolAverage >= 100) {
//     console.log('Koalas');
// } else {
//     console.log('No Minimum Score');
// }


//**********************************
// Switch Case
//**********************************
// const day = "Thursday"
// switch (day) {
//     case "Monday":
//         console.log('lets code');
//         break;
//     case "Tuesday":
//         console.log('lets watch a movie');
//         break;
//     case "Wednesday":
//         console.log('lets play games');
//         break;
//     case "Thursday":
//     case "Friday":
//         console.log('go to the beach');
//         break;    
//     default:
//         console.log('not a valid day');
//         break;
// }


//**********************************
// Ternary Operator
//**********************************
// const age = 23;
// age >= 18 ? console.log('OK1') : console.log('OK2');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);


//**********************************
// Code Challenge #04
//**********************************
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);