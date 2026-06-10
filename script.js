let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const guess = Number(input.value);
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    if (Number.isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Enter a valid number between 1 and 100";
        return;
    }
    attempts++;
    if (guess < randomNumber) {
        message.textContent = "Too low!";
    } else if (guess > randomNumber) {
        message.textContent = "Too high!";
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        input.disabled = true;
    }
    attemptsText.textContent = "Attempts: " + attempts;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    const input = document.getElementById("guessInput");
    input.value = "";
    input.disabled = false;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
}
