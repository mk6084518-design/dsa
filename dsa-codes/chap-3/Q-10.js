
let random = Math.floor(Math.random() * 100) + 1;

let guess;

while (guess !== random) {
    let input = prompt("Guess the number (1-100):");

    if (input === null) {
        alert("Game cancelled!");
        break;
    }

    if (input.trim() === "" || isNaN(Number(input))) {
        alert("Invalid input! Please enter a number.");
        continue;
    }

    guess = Number(input);

    if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
        continue;
    }

    if (guess > random) {
        alert("Too high! Try a smaller number.");
    } else if (guess < random) {
        alert("Too low! Try a bigger number.");
    } else {
        alert("Congratulations! 🎉 You guessed the correct number: " + random);
    }
}
