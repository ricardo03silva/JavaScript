'use strict';

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

//&& and || (short-circuiting)
//returns the first truthy value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 0 || 'Hello' || 23 || true); //first here is 'Hello'

const guests = restaurant.numGuests || 10;
//numGuests doesn't exists so -> 10
console.log(guests);

console.log('---AND---'); //returns the last truthy value if everything is true
console.log(3 && 'Jonas');
console.log('' && 'Jonas');
console.log(true && 0);
console.log(undefined && 23);
console.log(23 && 2);
console.log(undefined && null && 0 && 'Hello' && 23 && true);

// //REST element ... (COMPRESS ELEMENTS)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //1 2 [3, 4, 5]

// //Spread Operators on the right side of = (SPREAD ELEMENTS)
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// //1,2 + all elements from arr
// console.log(newArr);
// console.log(...newArr); //logs each element individually

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //iterables
// const str = 'Jonas';
// const letters = [...str, 'S'];
// console.log(letters); //['J', 'o', 'n', 'a', 's', 'S']

// const ingredients = ['tomato sauce', 'mushrooms', 'cheese'];
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Ricardo', foundedIn: 1998 };
// console.log(newRestaurant);

// //Destructuring Objects
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Nespereira, Guimaraes',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// //not specifing all values, the defaults will be used
// restaurant.orderDelivery({
//     address: 'Nespereira, Guimaraes',
//     starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// //menu doesn't exist in restaurant so it gets the default [] value defined
// //starterMenu exists so it ignores the default value defined by us
// console.log(menu, starters);

// // //nested objects
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //Destructuring Arrays
// const arr = [2, 3, 4];
// const [x, , y] = arr;
// //skiping the middle value
// console.log(x, y);

// // nested arrays
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
