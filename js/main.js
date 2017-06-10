/*jshint esversion: 6*/

var colors = generateRandomColors(6);

var squares       = document.querySelectorAll(".square");
var colorDisplay  = document.getElementById("colorDisplay");
var pickedColor   = pickColor();
var resultDisplay = document.querySelector("#result");
var h1 = document.querySelector("h1");

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
      resultDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      resultDisplay.textContent = "Try Again...";
    }
  });
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    squares[i].textContent = "Correct!";
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