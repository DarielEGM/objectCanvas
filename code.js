"use strict";

const canvas = document.getElementById('canvas');
const ctx =  canvas.getContext("2d");

ctx.lineWidth = "6";
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#26a";
ctx.strokeRect(30,50, 400,200);
ctx.fillRect(10, 20, 400, 200);
ctx.lineTo(80, 300);
ctx.lineTo(120, 350);
ctx.lineTo(100, 400);
ctx.lineTo(120, 450);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineTo(80,300);
ctx.lineTo(80,200);
ctx.stroke();
ctx.arc(120, 120, 100, 10,40);
ctx.stroke();