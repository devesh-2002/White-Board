"use strict";

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 500;
var context = canvas.getContext("2d");
var start_bg_color = "white";
context.fillStyle = start_bg_color;
context.fillRect(0, 0, canvas.width, canvas.height);
var draw_color = "black";
var draw_width = "2";
var is_drawing = false;

function change_color(element) {
  draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }

  event.preventDefault();
}

function stop() {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }

  event.preventDefault();
}

function clear_canvas() {}