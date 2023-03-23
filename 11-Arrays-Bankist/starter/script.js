'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach((el, i) => {
        const type = el > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__value">${el}</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// displayMovements(account1.movements);

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));
// //Splice: mutates the array (deletes the choosen elements)
// arr.splice(2);
// console.log(arr);
// arr.splice(-1);
// console.log(arr);
// //reverse: also mutates the array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse());
// console.log(arr);

// let letters = arr.concat(arr2);
// //OR ([...arr, ...arr2])
// console.log(letters);

// console.log(letters.join(' - '));

// //at method
// const arr = [23, 11, 64];
// console.log(arr.at(0));
// console.log(arr.at(-1)); //instead of arr[arr.length -1]

// //forEach()
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((el, i) => {
//     if (el > 0) {
//         console.log(`Movement ${i + 1}: You Deposited ${el}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${el}`);
//     }
// });

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach((el, i) => {
//     console.log(`${i} : ${el}`);
// });
/////////////////////////////////////////////////

//Challenge 01
/*
  Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
  1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

  2. Create an array with both Julia's (corrected) and Kate's data

  3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy🐶")

  4. Run the function for both test datasets
*/
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = (arr1, arr2) => {
    const arr = arr1.slice(1);
    console.log(arr);
};

checkDogs(dogsJulia, dogsKate);
