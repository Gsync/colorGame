/*jshint esversion: 6*/
var numSquares = 9;
var colors        = generateRandomColors(numSquares);

var squares       = document.querySelectorAll(".square");
var colorDisplay  = document.getElementById("colorDisplay");
var pickedColor   = pickColor();
var resultDisplay = document.querySelector("#result");
var h1            = document.querySelector("h1");
var resetButton   = document.querySelector("#reset");
var modeButtons   = document.querySelectorAll(".mode");

modeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
    this.classList.add("selected");

    if (this.textContent === "Easy") {
      numSquares = 3;
    } else if (this.textContent === "Medium") {
      numSquares = 6;
    } else {

      numSquares = 9;
    }

    reset();
  });
});


function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resultDisplay.textContent = "Good Luck!!!";
  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";


  squares.forEach(function(s, i) {
    if (colors[i]) {
      s.style.display = "block";
      s.style.backgroundColor = colors[i];
    } else {
      s.style.display = "none";
    }
  });
}

resetButton.addEventListener('click', function() {
  reset();
});

colorDisplay.textContent = pickedColor;
squares.forEach(function(square, index) {

  //Add initial colors to squares
  square.style.backgroundColor = colors[index];

  //Add click listeners to squares
  square.addEventListener("click", function() {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare to picked color
    if (clickedColor === pickedColor) {
      resultDisplay.textContent = "Welldone!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      resultDisplay.textContent = "Try Again...";
    }
  });
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}