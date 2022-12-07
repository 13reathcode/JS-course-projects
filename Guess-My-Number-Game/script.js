// @JonasSchmedtmann Guess-My-Number game by @13reathcode
'use strict';

// ------------ Functions to dry out the code ------------

// Display 

const displayMessage = message => document.querySelector('.message').textContent = message;
const displayScore = score => document.querySelector('.score').textContent = score;
const displayNumber = number => document.querySelector('.number').textContent = number;

// Create secret number

const createSecret = () => Math.trunc(Math.random() * 20 + 1);

// Change body color

const bodyColor = value => document.querySelector('body').style.backgroundColor = value;

// Change secret number width

const widthNumber = width => document.querySelector('.number').style.width = width;

// Display secret number in console
console.log(secretNumber);

// ------------ Guess ------------

document.querySelector('.check').addEventListener('click', function () {

    // Inputed number store in variable
    let guess = Number(document.querySelector('.guess').value);

    // When input is not valid
    if (!guess) {
        displayMessage("No number!");

        // When player wins
    } else if (guess === secretNumber) {

        //Display the number
        displayMessage("Correct number!");

        displayNumber(secretNumber);

        bodyColor(`#60b347`);

        widthNumber(`30rem`);

        // Changing the highscore

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }

        // When guess is different
    } else if (guess !== secretNumber) {

        if (score > 1) {

            displayMessage(guess > secretNumber ? `Too high` : `Too low`);
            score--;
            displayScore(score);

        } else {

            displayScore(0);
            displayMessage('You lost the game');

        }

    }
});

// ------------ Again ------------

document.querySelector('.again').addEventListener('click', function () {
    //Updating all variables and values

    bodyColor(`#222`);
    secretNumber = createSecret();

    displayNumber(`?`);
    widthNumber(`15rem`);
    displayMessage('Start guessing...');

    // Display secret number in console
    console.log(secretNumber);

    score = 20;
    displayScore(score);
    document.querySelector('.guess').value = '';

});

// ------------ Primary values ------------

let secretNumber = createSecret(); // Secret number from 1 - 20
let score = 20;
let highscore = 0;