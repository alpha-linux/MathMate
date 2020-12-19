var sketcharea = document.getElementById('board');
var context = sketcharea.getContext('2d');
var radius = 10;

sketcharea.width = window.innerWidth;
sketcharea.height = window.innerHeight;

var putPoint = function(e){
    context.beginPath()
    context.arc(e.offsetX,e.offsetY,radius,0, Math.PI*2);
    context.fill();
}

sketcharea.addEventListener('mousedown',putPoint);
