let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();  
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(e.clientX - myCanvas.offsetLeft, e.clientY - myCanvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - myCanvas.offsetLeft, e.clientY - myCanvas.offsetTop);
}

myCanvas.addEventListener('mousedown', startPosition);
myCanvas.addEventListener('mouseup', endPosition);
myCanvas.addEventListener('mousemove', draw);

