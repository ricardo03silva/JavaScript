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

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //Map: same operation in every element
// //doesn't mutate the original array
// const rate = 1.1;
// const newArr = arr.map((el) => {
//     return el * rate;
// });
// // console.log(newArr);

//accounts array at the top
const createName = (arr) => {
    arr.forEach((el) => {
        el.username = el.owner
            .toLowerCase()
            .split(' ')
            .map((name) => name[0])
            .join('');
    });
};
createName(accounts);

//Find Index: returns the index of the element
const deleteUser = (user, pin) => {
    accounts.splice(
        accounts.findIndex((el) => {
            return el.username === user && el.pin === pin;
        }),
        1
    );
};
// deleteUser('js', 1111);

// //Filter: test element to a condition
// //inside just return a true or false
// const deposits = arr.filter((el) => {
//     //movements above 0 are push into the new array
//     return el > 0;
// });
// const withdrawal = arr.filter((el) => el < 0);
// // console.log(deposits);
// // console.log(withdrawal);

// //Reduce: all elements down to one single value
// //the 0 in the end is the initial value of the counter
// const balance = arr.reduce((count, el) => (count += el), 0);
// console.log(balance);

// //reduce to the max value
// const max = arr.reduce((value, el) => {
//     return (value = el > value ? el : value);
// }, arr[0]);
// console.log(max);

// //Find: retrieves first element to pass the condition
// const firstWithdrawal = arr.find((el) => {
//     return el < 0;
// });
// // console.log(firstWithdrawal);

// const account = accounts.find((acc) => {
//     return acc.owner === 'Jessica Davis';
// });
// console.log(account);

/////////////////////////////////////////////////

// //Challenge 01
// const checkDogs = (arr1, arr2) => {
//     const arr = arr1.slice(1, -2).concat(arr2);
//     arr.forEach((el, i) => {
//         const str = el >= 3 ? `Dog number ${i + 1} is adult and is ${el} years old` : `Dog number ${i + 1} is still a puppy`;
//         console.log(str);
//     });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Challenge 02
// const calcAvg = (arr) => {
//     const dogAge = arr
//         .map((el) => {
//             const age = el <= 2 ? el * 2 : el * 4 + 16;
//             return age;
//         })
//         .filter((el) => el >= 18)
//         .reduce((value, el, i, arr) => value + el / arr.length, 0);
//     return dogAge;
// };

// console.log(calcAvg([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAvg([16, 6, 10, 5, 6, 1, 4]));

// //some and every
// //basta um cumprir a condição => true
// console.log(
//     arr.some((el) => {
//         return el > 0;
//     })
// );

// //true se todos cumprirem a condição
// console.log(
//     arr.every((el) => {
//         return el > 0;
//     })
// );

// //flat and flatMap
// const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr1.flat()); //removes nested arrays and joins all elements in just one array

// const arr2 = [[1, 2, 3], [4, 5, [6]], 7, 8];
// console.log(arr2.flat(2)); //2 to remove the nested array [6] that is a second level nested array

// const accountMov = accounts
//     .map((el) => {
//         return el.movements;
//     })
//     .flat()
//     .reduce((value, el) => {
//         return value + el;
//     }, 0);

// console.log(accountMov);

// //joins map and flat method: flatMap()
// const accountMov2 = accounts
//     .flatMap((el) => {
//         return el.movements;
//     })
//     .reduce((value, el) => {
//         return value + el;
//     }, 0);

// console.log(accountMov2);

// //sort arrays
// //sort() converts to string and then sort by string
// const owners = ['Jonas', 'Ricardo', 'Adam', 'Marta'];
// console.log(owners.sort());
// console.log(arr.sort()); //not work in numbers

// //return < 0, A, B (keeps the order)
// //return > 0, B, A (change the order)
// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

//Challenge 04
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.map((el) => {
    el.weight *= 1000;
    el.recFood = el.weight ** 0.75 * 28;
});

const findByOwner = (owner) => {
    const dog = dogs.find((el) => {
        return el.owners.includes(owner);
    });
};

findByOwner('Sarah');
