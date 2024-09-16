let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const feedback = document.getElementById("feedback");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value, 10);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = `Congrats! You guessed the number ${randomNumber} in ${attempts} attempts!`;
    guessButton.disabled = true;
    restartButton.classList.remove("hidden");
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Too high! Try again.";
  } else {
    feedback.textContent = "Too low! Try again.";
  }

  guessInput.value = "";
  guessInput.focus();
});

restartButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  guessButton.disabled = false;
  restartButton.classList.add("hidden");
  guessInput.value = "";
  guessInput.focus();
});
