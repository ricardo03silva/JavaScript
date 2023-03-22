'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced object literals
    openingHours,
    //before was like this-> openingHours: openingHours

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

// //********************** */
// //Working with Strings
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') console.log('True');
//     else console.log('False');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('2A');
// checkMiddleSeat('3E');
// checkMiddleSeat('14D');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const email = ' Hello@Jonas.io \n';
// console.log(email.toLowerCase().trim());

// // //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// //replaceAll new in ESNext
// console.log('gate and gate'.replaceAll('gate', 'door'));

// console.log(airline.includes('Portugal'));
// console.log(airline.startsWith('TA'));
// console.log(airline.endsWith('gal'));

// console.log('a+very+nice+string'.split('+'));
// const [firstName, lastName] = 'Ricardo Silva'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = (name) => {
//     const names = name.split(' ');
//     const namesUpper = [];
//     for (const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// };
// capitalizeName('ricardo nuno silva');

// //Real Life Example of Padding a String
// const maskCreditCard = function (number) {
//     // const str = String(number);
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(479084653213));

// //Repeat
// const message2 = 'Bad Weather...All flights Delayed...';
// console.log(message2.repeat(5));

// //********************** */
// //Sets
// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pizza']);
// console.log(ordersSet); //the duplicates are gone
// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // ordersSet.clear();

// for (const order of ordersSet) {
//     console.log(order);
// }
// //Example use of Sets
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Chef'];
// const staffUnique = [...new Set(staff)]; //convert set to array
// console.log(staffUnique);

// //********************** */
// //Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firezene, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23);
// console.log(rest);

// const question = new Map([
//     ['question', 'What is the best language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct!'],
//     [false, 'Try Again!'],
// ]);
// console.log(question);

// //convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }
// const answer = Number(prompt('Your Answer'));
// console.log(question.get(question.get('correct') === answer));

// //********************** */
// //Looping Objects: keys, values, entries
// const properties = Object.keys(openingHours);
// const properties1 = Object.values(openingHours);
// const properties2 = Object.entries(openingHours);
// console.log(properties, properties1, properties2);

// for (const [day, { open, close }] of properties2) {
//     console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// //********************** */
// //Optional Chainning
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day} we open at ${open}`);
// }

// //check if Methods exists
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderOther?.(0, 1) ?? 'Method does not exist');

// //check if arry is empty
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// //********************** */
// //For-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//     console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// //********************** */

// //Logical Assignment Operators
// const rest1 = {
//     name: 'Capri',
//     numGuests: 0,
// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni',
// };

// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>'; //not happens because value not exists
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

// //********************** */

// //&& and || (short-circuiting)
// //returns the first truthy value
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || null || 0 || 'Hello' || 23 || true); //first here is 'Hello'

// restaurant.numGuests = 0;
// //numGuests it's 0 (falsy value) so guests = 10
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// //?? check if value is null (0 and '' are not null) so guests = 0
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log('---AND---'); //returns the last truthy value if everything is true
// console.log(3 && 'Jonas');
// console.log('' && 'Jonas');
// console.log(true && 0);
// console.log(undefined && 23);
// console.log(23 && 2);
// console.log(undefined && null && 0 && 'Hello' && 23 && true);

// //********************** */

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

// //********************** */

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

// //********************** */

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

// //********************** */

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

// //********************** */
// //Coding Challenge 01
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);

// const printGoals = function (...player) {
//     console.log(`${player.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// //Coding Challenge 02
// for (const [goal, player] of game.scored.entries()) {
//     console.log(`GOAL ${goal + 1}: ${player}`);
// }

// const odds = Object.values(game.odds);
// let total = 0;
// for (const item of odds) {
//     total += item;
// }
// console.log(total / odds.length);

// for (const [key, value] of Object.entries(game.odds)) {
//     const teamStr = key === 'x' ? 'Draw' : `${game[key]}`;
//     console.log(`Odd of ${teamStr} is ${value}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// //Coding Challenge 03
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// const events = new Set(gameEvents.values());
// console.log(events);

// gameEvents.delete(64);

// const minutes = [...gameEvents.keys()].pop(); //minute of last event
// console.log(`An event happened, on average, every ${minutes / gameEvents.size} minutes`); //92 / 10

// for (const [key, value] of gameEvents) {
//     const str = key < 45 ? '[First Half]' : '[Second Half]';
//     console.log(`${str} ${key}: ${value}`);
// }

//Challenge 04
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const btn = document.querySelector('button');

// const convertCamelCase = () => {
//     const txt = document.querySelector('textarea').value;
//     const arr = txt.split('\n');
//     console.log(arr);
//     for (const [i, n] of arr.entries()) {
//         const [first, second] = n.toLowerCase().trim().split('_');
//         const newW = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//         console.log(`${newW.padEnd(20)}${'✔'.repeat(i + 1)}`);
//     }
// };
// btn.addEventListener('click', convertCamelCase);

// Flights
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const arr = flights.split('+');
//_Delayed_Departure fao93766109 txl2133758440 11:25
//(type, from, to, time)
const splitFlights = () => {
    for (const n of arr) {
        const [type, from, to, time] = n.split(';');
        const flight = `${type.includes('Delayed') ? '🔴' : ''} ${type.slice(1).replace('_', ' ')} ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`;
        console.log(flight);
    }
};
splitFlights();
