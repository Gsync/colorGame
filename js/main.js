/*jshint esversion: 6*/
var numSquares = 6;
var colors        = generateRandomColors(numSquares);

var squares       = document.querySelectorAll(".square");
var colorDisplay  = document.getElementById("colorDisplay");
var pickedColor   = pickColor();
var resultDisplay = document.querySelector("#result");
var h1            = document.querySelector("h1");
var resetButton   = document.querySelector("#reset");
var easyBtn       = document.querySelector("#easyBtn");
var hardBtn       = document.querySelector("#hardBtn");

easyBtn.addEventListener('click', function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener('click', function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
   numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }

});

resetButton.addEventListener('click', function() {

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resultDisplay.textContent = "Good Luck!!!";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";


  squares.forEach(function(s, i) {
    s.style.backgroundColor = colors[i];
  });

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