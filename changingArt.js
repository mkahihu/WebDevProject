/*Authors: Miller Kahihu and Charles Maus*/
function randomRGB()
{
    var redLevel = (randNum(0xff)).toString(16);
    var greenLevel = (randNum(0xff)).toString(16);
    var blueLevel = (randNum(0xff)).toString(16);
    return "#" + redLevel + greenLevel + blueLevel;
}

function createRectangle(w, h, pen)
{
  pen.fillStyle = randomRGB();
  x = randDouble(0,w);
  y = randDouble(0,h);
  pen.fillRect(x, y, 50, 50);
  setTimeout(function(){createRectangle(w, h, pen)}, 1000);
}

function createCircle(w, h, pen)
{
  pen.fillStyle = randomRGB();
  x = randDouble(0,w)
  y = randDouble(0,h);
  //pen.beginPath();
  pen.arc(x,y,50,0,2*Math.PI);
  pen.fill();
  setTimeout(function(){createCircle(w, h, pen)}, 1000);
}

function main()
{
  var canvas = document.getElementById("myCanvas");
  var pen = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  createRectangle(w, h, pen);
  createCircle(w, h, pen);

}
