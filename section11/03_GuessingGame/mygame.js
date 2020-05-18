let secretNumber = 4;

let stringGuess = prompt('Guess a number');
let GuessNumber = Number(stringGuess);

if (GuessNumber > secretNumber) {
	alert('Too high.  Guess again!');
} else if (GuessNumber < secretNumber) {
	alert('Too low.  Guess again!');
} else if (GuessNumber === secretNumber) {
	alert('YOU GOT IT RIGHT!');
}
