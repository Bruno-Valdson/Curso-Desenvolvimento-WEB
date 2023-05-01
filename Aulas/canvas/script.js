let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "../Desafios/Desafio03 - Receita/images/logo_tudogostoso.png";


img.onload = desenharImg;

function desenharImg() {
    ctx.drawImage(this, 10, 10);
}

let circle = {
    x: 250,
    y: 240,
    raio: 100,
    inicio: 0,
    fim: 0,
}


function drawCircle(c) {

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "rgb(114, 114, 114)";
    ctx.fill();

    ctx.beginPath();

    ctx.rect(10, 140, 100, 200);
    ctx.fillStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "green"
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "green";
    ctx.moveTo(120, 140);
    ctx.lineTo(120, 340);
    ctx.lineTo(180, 340);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "green";
    ctx.fillStyle = "white";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx.fill();
    ctx.stroke();
}

setInterval(function () {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 6;
    }

    drawCircle(circle);

}, 35);
