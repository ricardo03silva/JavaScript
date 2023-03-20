'use strict';

// //**********Scope
// //global scope
// const firstName = 'Ricardo';

// //function scope
// function calcAge(birthYear) {
//     const age = 2023 - birthYear;

//     //function scope
//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         //block scope
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, and you´re a millenial, ${firstName}`;
//             console.log(str);
//         }
//     }
//     printAge();
//     return age;
// }
// calcAge(2001);

//************This keyword
//global this keyword refers to the window object
console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this);
    //have it's own this
};
calcAge(2001);

const calcAge1 = (birthYear) => {
    console.log(2023 - birthYear);
    console.log(this);
    //uses the global/parent this keyword, because it's arrow funtion
};
calcAge1(2001);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
        //prints jonas object
    },
};
jonas.calcAge();
