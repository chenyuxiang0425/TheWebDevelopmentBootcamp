//isEven
function isEven(num) {
    return ((num & 1) === 0);
}

// factorial
function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return num * factorial(num -1);
}

// kebabToSnake
//replace all '-' with "_"'s
function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}


