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

    const rect = myCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(x);

    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    console.log(x);
}

myCanvas.addEventListener('mousedown', startPosition);
myCanvas.addEventListener('mouseup', endPosition);
myCanvas.addEventListener('mousemove', draw);
myCanvas.addEventListener('mousemove', (e) => {
console.log(e.clientX);
const rect = myCanvas.getBoundingClientRect();
let Cx = e.clientX - rect.left;
let Cy = e.clientY - rect.top;
let x = document.getElementById('x');
let y = document.getElementById('y');
x.textContent = 'X: '+ Cx;
y.textContent = 'Y: ' + Cy;
})

