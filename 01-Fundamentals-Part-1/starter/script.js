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
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

let markBMI = (markMass / markHeight **2);
let johnBMI = (johnMass / johnHeight **2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}