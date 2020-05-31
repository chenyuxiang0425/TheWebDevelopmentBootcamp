let numSquares = 6;
let colors=[];
let selectColor;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById('colorDisplay');
let message = document.querySelector("#message");
let stripe = document.querySelector("#stripe");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
init();

function init() {
    setupModeButtons();
    setSquares();
    reset();
    resetButton.addEventListener("click",function () {
        reset();
    })
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",function () {
            for (let i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove('selected');
            }
            this.classList.add('selected');
            if (this.textContent === "EASY") numSquares = 3;
            if (this.textContent === "HARD") numSquares = 6;
            reset();
        });
    }
}

function setSquares() {
    for (let i = 0; i < squares.length; i++) {
        // style.background 不能在一些 firefox 上运行
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',function () {
            if (this.style.backgroundColor === selectColor) {
                message.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(selectColor);
                h1.style.backgroundColor = selectColor;
            } else {
                this.style.backgroundColor = 'rgb(23, 23, 23)';
                message.textContent = "Try again!";
            }
        });
    }
}

function reset() {
    colors = setRandomColors(numSquares);
    selectColor = pickColor(numSquares);
    colorDisplay.textContent = selectColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            // style.background 不能在一些 firefox 上运行
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(num) {
    // Math.floor 去除余数
    // Math.random() 0-1
    let randomIndex = Math.floor(Math.random() * (num));
    return colors[randomIndex];
}

function setRandomColors(num) {
    let colors = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color ="rgb("+ r + ", " + g + ", " + b + ")";
        colors.push(color);
    }
    return colors;
}

