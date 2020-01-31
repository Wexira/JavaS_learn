var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image(); /* bg - background */
var fg = new Image(); /* fg - frontground */
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 90;

// При нажатии на какую-либо кнопку

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 25;
}

// Создание блоков

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

// Позиция птички

var xPos = 10; /* Позиция по оси х 10 пикселей */
var yPos = 150; /* Позиция по оси у 150 пикселей */
var grav = 1.5;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        // Отслеживание прикосновений
        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
                || yPos + bird.height >= pipe[i].y + pipeUp.height + 
                gap) || yPos + bird.height >=) {
                    location.reload(); // Перезагрузка страницы 
                }


    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos); /* drawImage может принимать не только позиции объекта, но и высоту и ширину объекта */

    yPos += grav;
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

