let stripe = document.querySelector("#stripe");
let message = document.querySelector("#message");
let squares = document.querySelectorAll(".square");
let colors = setRandomColors(6);
let selectColor;

reset();
init();

function init() {
    setSquares();
}

function setSquares() {
    let colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = selectColor;

    for (let i = 0; i < squares.length; i++) {
        // style.background 不能在一些 firefox 上运行
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',function () {
            if (this.style.backgroundColor === selectColor) {
                message.textContent = "Correct!";
                changeColors(selectColor);
            } else {
                this.style.backgroundColor = 'rgb(23, 23, 23)';
                message.textContent = "Try again!";
            }
        });
    }
}

function reset() {
    selectColor = pickColor();
    for (let i = 0; i < squares.length; i++) {
        // style.background 不能在一些 firefox 上运行
        squares[i].style.backgroundColor = colors[i];
    }
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // Math.floor 去除余数
    // Math.random() 0-1
    let randomIndex = Math.floor(Math.random() * (6));
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
