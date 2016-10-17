/*Author: Miller Kahihu and Charles Maus*/
function randomRGB()
{
    var redLevel = (randNum(0xff)).toString(16);
    var greenLevel = (randNum(0xff)).toString(16);
    var blueLevel = (randNum(0xff)).toString(16);
    return "#" + redLevel + greenLevel + blueLevel;
}

function randNum(n)
{
   return Math.floor(n*Math.random());
}

function randDouble(a, b)
{
    return a + (b - a)*Math.random();
}

function createRectangle(w, h, pen)
{
  pen.fillStyle = randomRGB();
  x = randDouble(0,w);
  y = randDouble(0,h);
  pen.fillRect(x, y, 50, 50);
  setTimeout(function(){createRectangle(w, h, pen)}, 100);
}

function createCircle(w, h, pen)
{
  pen.fillStyle = randomRGB();
  x = randDouble(0,w)
  y = randDouble(0,h);
  pen.beginPath();
  pen.arc(x,y,50,0,2*Math.PI);
  pen.closePath();
  pen.fill();
  setTimeout(function(){createCircle(w, h, pen)}, 100);
}

function createTriangle(w, h, pen)
{
    pen.fillStyle = randomRGB();
    pen.beginPath();
    x = randDouble(0, w); 
    y = randDouble(0, h);
    pen.moveTo(x, y);
    pen.lineTo(x + 50, y + 50);
    pen.lineTo(x - 50, y + 50);
    pen.closePath();
    pen.fill();
    setTimeout(function(){createTriangle(w, h, pen)}, 100);    
}

function createHexagon(w, h, pen)
{
    pen.fillStyle = randomRGB();
    var s = Math.sin(Math.PI/3);
    var c = Math.cos(Math.PI/3);
    x = randDouble(0,w);
    y = randDouble(0,h);
    pen.beginPath();
    pen.moveTo(x, y);
    pen.lineTo(x + 50, y);
    pen.lineTo(x + 75, y - 50);
    pen.lineTo(x + 50, y - 100);
    pen.lineTo(x, y - 100);
    pen.lineTo(x - 25, y - 50);
    pen.closePath();
    pen.fill();
    setTimeout(function(){createHexagon(w, h, pen)}, 100);    
}

function main()
{
  var canvas = document.getElementById("myCanvas");
  var audio = new Audio('nyonCat.mp3');
  audio.play();
  var pen = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  createRectangle(w, h, pen);
  createCircle(w, h, pen);
  createTriangle(w, h, pen);
  createHexagon(w, h, pen);
}
