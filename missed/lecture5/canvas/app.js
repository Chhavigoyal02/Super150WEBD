


let canvas = document.querySelector('canvas');
// brush = context
let ctx = canvas.getContext('2d');
// but we have to give start point(x,y),width,height so fillRect accepts four args
// ctx.fillRect(100,200,150,50);

// ctx.fillStyle = 'red';//phle brush ko paint me duba diya
// ctx.fillRect(100,200,150,50);//phir drwa krenge


// ctx.strokeStyle = 'green';
// ctx.strokeRect(50,50,50,100);


// path
// ctx.beginPath();
// ctx.moveTo(40,40);//starting point
// ctx.lineTo(100,120);
// ctx.lineTo(200,220);
// ctx.lineTo(50,50);
// ctx.stroke();

// triangle
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(100,100);
// ctx.stroke();
// // ctx.fill();
// ctx.closePath();

// drawing text
// here we do not give width and height but only give string, starting point and ending point
// ctx.font = '28px sans-serif';
// ctx.fillStyle = 'red';
// ctx.fillText("hello",140,100);
