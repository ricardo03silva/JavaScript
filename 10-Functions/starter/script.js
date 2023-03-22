'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //is passed by value
console.log(jonas); //is passed by refence (it's a object)
//checkIn changes 'jonas' value but not flight value

const flightNum = flight; //copies the value
const passenger = jonas; //copies the reference
