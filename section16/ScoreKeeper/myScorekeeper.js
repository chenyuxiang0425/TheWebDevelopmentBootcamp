let p1button = document.querySelector("#player1");
let p2button = document.querySelector("#player2");
let resetButton = document.querySelector("#reset");
let winningScoreDisplay = document.querySelector("p span");
let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display");
let win_score = document.querySelector("#win_score");

let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 5;


p1button.addEventListener("click",function () {
    if (!gameOver) {
        p1score ++;
        p1display.textContent  = p1score.toString();
        if (p1score >= winningScore) {
            gameOver = true;
            p1display.classList.add("winner");
        }
    }
});

p2button.addEventListener("click",function () {
    if (!gameOver) {
        p2score ++;
        p2display.textContent  = p2score.toString();
        if (p2score >= winningScore) {
            gameOver = true;
            p2display.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click",function () {
    reset();
});

function reset() {
    p1score = 0;
    p2score = 0;
    gameOver = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    p2display.textContent  = 0;
    p1display.textContent  = 0;
}

win_score.addEventListener("change",function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})