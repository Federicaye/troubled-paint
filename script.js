let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');

const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');

const pen = document.getElementById('pen');
let usePen = false;
pen.addEventListener('click', () => {
    usePen = true;
    pen.classList.add('active');
});

let src = '';
let icons = document.querySelectorAll('.image-icon')
icons.forEach(function (icon) {
    icon.addEventListener('click', (event) => {
        icon.classList.add('active');
        usePen = false;
        pen.classList.add('inactive');
        pen.classList.remove('active');
        src = icon.getAttribute('src');
        let otherIcons = Array.from(icons).filter(function (icon) {
            return icon !== event.target
        })
        console.log(src);
        otherIcons.forEach(function (icon) {
            icon.classList.remove('active');
        })
        return src;
    })
});


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
    img.src = src;
    const rect = myCanvas.getBoundingClientRect();


    if (!usePen) {
        const x = e.clientX - rect.left - 60;
        const y = e.clientY - rect.top - 60;
        ctx.drawImage(img, x, y);
    }

    if (usePen) {
        if (sizePicker && colorPicker) {
            ctx.lineWidth = sizePicker.value;
            ctx.strokeStyle = colorPicker.value;
        }
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.lineCap = 'round';

        ctx.lineTo(x, y); //disegna una linea
        ctx.stroke(); //traccia il percorso
        ctx.beginPath();//inizia un percorso
        ctx.moveTo(x, y); //muove il pennello a x y
    }


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
    x.textContent = 'X: ' + Cx;
    y.textContent = 'Y: ' + Cy;
})

