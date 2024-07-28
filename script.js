let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
if (myCanvas.getContext) {
    const ctx = myCanvas.getContext("2d");}

const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');
const tea = document.getElementById('tea');
const pc = document.getElementById('pc');
const globe = document.getElementById('globe');
const data = document.getElementById('data');
const globe2 = document.getElementById('globe2');
const message2 = document.getElementById('message2');
const message1 = document.getElementById('message1');

let icons = document.querySelectorAll('.image-icon')
icons.forEach(function (icon) {
icon.addEventListener('click', ()=> {
    icon.classList.add('active');
    let otherIcons = Array.from(icons).filter(function(icon){
        return icon !== event.target
    })

    otherIcons.forEach(function (icon) {
        icon.classList.remove('active');
    })
})
} );


let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();  
} 

/* function draw(e) {
    if (!painting) return;

    const rect = myCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(x);

    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;
     
    ctx.lineTo(x, y); //disegna una linea
    ctx.stroke(); //traccia il percorso
    ctx.beginPath();//inizia un percorso
    ctx.moveTo(x, y); //muove il pennello a x y
    
    console.log(x);
} */
    const img = new Image();
    function draw(e) {
        
    if (!painting) return;
        const rect = myCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.drawImage(img, x, y);
    }
    img.src = "pc.png";

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

