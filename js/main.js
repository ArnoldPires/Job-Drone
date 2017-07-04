var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
  //Green ball shape and position
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
