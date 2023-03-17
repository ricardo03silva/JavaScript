'use strict';

const score0 = document.getElementById('score--0');
const current0 = document.getElementById('current--0');
const score1 = document.getElementById('score--1');
const current1 = document.getElementById('current--1');

const diceImg = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');

const player0side = document.querySelector('.player--0');
const player1side = document.querySelector('.player--1');

let currentPlayer, currentScore, gameStarted;
const maxScore = 10;

// New Game
const newGame = () => {
    gameStarted = true;
    currentPlayer = 0;
    currentScore = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceImg.classList.remove('hidden');
    player0side.classList.remove('player--winner');
    player1side.classList.remove('player--winner');
    player0side.classList.add('player--active');
    player1side.classList.remove('player--active');
};
newGame();

//Functions
const rollDice = () => {
    if (gameStarted) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            updateScore();
        } else {
            switchPlayer();
        }
        displayDice(diceNumber);
    }
};

const holdDice = () => {
    if (gameStarted) {
        //save score && check if player wins
        if (!currentPlayer) {
            score0.textContent = currentScore + Number(score0.textContent);
            if (Number(score0.textContent) >= maxScore) {
                console.log('Player 0 Wins');
                player0side.classList.add('player--winner');
                player0side.classList.add('player--active');
                diceImg.classList.toggle('hidden');
                gameStarted = false;
            }
        } else {
            score1.textContent = currentScore + Number(score1.textContent);
            if (Number(score1.textContent) >= maxScore) {
                console.log('Player 1 Wins');
                player1side.classList.add('player--winner');
                player1side.classList.add('player--active');
                diceImg.classList.toggle('hidden');
                gameStarted = false;
            }
        }

        switchPlayer();
    }
};

const updateScore = () => {
    if (!currentPlayer) {
        current0.textContent = currentScore;
    } else {
        current1.textContent = currentScore;
    }
};

const switchPlayer = () => {
    player0side.classList.toggle('player--active');
    player1side.classList.toggle('player--active');
    !currentPlayer ? (current0.textContent = 0) : (current1.textContent = 0);
    currentScore = 0;
    currentPlayer = 1 - currentPlayer;
};

const displayDice = (diceNumber) => {
    gameStarted ? diceImg.classList.remove('hidden') : diceImg.classList.add('hidden');
    diceImg.src = `dice-${diceNumber}.png`;
};

//EventListeners
btnRollDice.addEventListener('click', rollDice);
btnHoldDice.addEventListener('click', holdDice);
btnNewGame.addEventListener('click', newGame);
