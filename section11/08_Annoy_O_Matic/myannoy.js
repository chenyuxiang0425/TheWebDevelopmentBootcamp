let answer = prompt('Are we there yet? Answer yes(contained) if you are.');

while (answer.indexOf('yes') === -1) {
	answer = prompt('Are we there yet? Answer yess(contained) if you are.');
}

alert('YAY, WE MADE IT!!!');
