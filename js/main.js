var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares       = document.querySelectorAll(".square");
var colorDisplay  = document.getElementById("colorDisplay");
var pickedColor   = pickColor();
var resultDisplay = document.querySelector("#result");

colorDisplay.textContent = pickedColor;
squares.forEach(function(square, index) {

  //Add initial colors to squares
  square.style.backgroundColor = colors[index];

  //Add click listeners to squares
  square.addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare to picked color
    if (clickedColor === pickedColor) {
      resultDisplay.innerText = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      resultDisplay.textContent = "Try Again...";
    }
  });
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    squares[i].textContent = "Correct!";
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}