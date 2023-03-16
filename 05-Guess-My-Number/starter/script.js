'use strict';

const body = document.querySelector('body');
//Buttons
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
//Game Status Message
const gameStatus = document.querySelector('.message');
//Input value
const inputValue = document.querySelector('.guess');
//Secret Number
const secretText = document.querySelector('.number');
let secretNumber;
//Score
const scoreText = document.querySelector('.score');
let score = 20;
//highscore
let highscore = 0;
const highscoreText = document.querySelector('.highscore');

const generateSecretNumber = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
};
generateSecretNumber();

const displayMessage = (message) => {
    gameStatus.textContent = message;
};

const checkInput = () => {
    const guess = Number(inputValue.value);

    if (!guess) {
        //no input
        gameStatus.textContent = 'No Number';
    } else if (guess === secretNumber) {
        //player wins
        gameStatus.textContent = 'Correct';
        body.style.backgroundColor = '#60b347';
        secretText.style.width = '30rem';
        secretText.textContent = secretNumber;
        //check highscore
        if (score > highscore) {
            highscore = score;
            highscoreText.textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(score > secretNumber ? 'Too High' : 'Too Low');
            // score > secretNumber ? displayMessage('Too High') : displayMessage('Too Low');
            score -= 1;
            scoreText.textContent = score;
        } else {
            displayMessage('Lost The Game');
        }
    } else {
        displayMessage('Error, reload page');
    }
};

const resetGame = () => {
    //restore values of score and secret number
    generateSecretNumber();
    score = 20;
    scoreText.textContent = score;
    //restore game status text
    displayMessage('Start Guessing...');
    inputValue.value = '';
    //secret number label
    secretText.innerHTML = '?';
    secretText.style.width = '15rem';
    //restore background
    body.style.backgroundColor = '#222';
};

//EventListener
checkButton.addEventListener('click', checkInput);
againButton.addEventListener('click', resetGame);
