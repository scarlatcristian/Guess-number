// Header
const btnAgain = document.querySelector(".again");
const number = document.querySelector(".number");
const body = document.querySelector("body");

// Section-left
const guess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");

// Section-right
const message = document.querySelector(".message");
const displayScore = document.querySelector(".score");
const displayHighscore = document.querySelector(".highscore");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const game = function () {
  const playerGuess = Number(guess.value);
  if (!playerGuess) displayMessage("Must provide a valid number");
  if (playerGuess > 20) displayMessage(`Number can't be higher than 20`);
  if (playerGuess < 1) displayMessage(`Number can't be lower than 1`);

  //   If guess is right
  if (playerGuess === randomNumber) {
    displayMessage("You won!");
    btnCheck.disabled = true;
    body.style.backgroundColor = "#008000";
    number.textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }
  }

  //   If guess is wrong
  if (playerGuess !== randomNumber && playerGuess > 0 && playerGuess < 21) {
    score--;
    displayScore.textContent = score;

    displayMessage(
      playerGuess < randomNumber ? "📉 Number too low!" : "📈 Number too high!"
    );

    if (score === 0) {
      displayMessage("You lost!");
      btnCheck.disabled = true;
      body.style.backgroundColor = "#880808";
      number.textContent = randomNumber;
    }
  }
};

// Event handlers
btnCheck.addEventListener("click", game);

// Reset game
btnAgain.addEventListener("click", function () {
  body.style.backgroundColor = "#222";
  btnCheck.disabled = false;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  number.textContent = "?";
  guess.value = "";
  displayMessage("Start guessing...");
  console.log(randomNumber);
  score = 20;
  displayScore.textContent = score;
});
