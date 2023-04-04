const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById('clear-button');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", function (event) {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

canvas.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
  }
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});

canvas.addEventListener("mouseout", function () {
  isDrawing = false;
});

clearButton.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});