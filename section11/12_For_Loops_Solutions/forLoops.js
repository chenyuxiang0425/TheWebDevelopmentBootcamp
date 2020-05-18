console.log('PRINTING ALL NUMBERS BETWEEN -10 AND 19');
for (let i = -10; i <= 19; i++) {
	console.log(i);
}

console.log('PRINTING ALL EVEN BETWEEN 10 AND 40');
for (let i = 10; i <= 40; i += 2) {
	console.log(i);
}

console.log('PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333');
for (let i = 300; i <= 333; i += 1) {
	if (i & 1) console.log(i);
}

console.log('PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50');
for (let i = 5; i <= 50; i += 1) {
	if (i % 5 === 0 && i % 3 === 0) console.log(i);
}
