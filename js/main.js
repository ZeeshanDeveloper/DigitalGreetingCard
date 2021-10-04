//main
var name = 'null';

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let background0 = new Image();
let background1 = new Image();
let background2 = new Image();
let background3 = new Image();
let background4 = new Image();
let background5 = new Image();

ctx.fillStyle = "white";
ctx.textAlign = "center";

background0.src = "img/card-1.jpg";
background1.src = "img/card-2.jpg";
background2.src = "img/card-3.jpg";
background3.src = "img/card-4.jpg";
background4.src = "img/card-5.jpg";
background5.src = "img/card-6.jpg";

ctx.drawImage(background0, 0, 0);
ctx.drawImage(background1, 0, 0);
ctx.drawImage(background2, 0, 0);
ctx.drawImage(background3, 0, 0);
ctx.drawImage(background4, 0, 0);
ctx.drawImage(background5, 0, 0);

// Make sure the image is loaded first otherwise nothing will draw.



function generateImg() {
    let radiovalue = document.querySelector('input[name="card"]:checked').value;
    if (radiovalue == 0) {
        ctx.drawImage(background0, 0, 0);
    }
    else if (radiovalue == 1) {
        ctx.drawImage(background1, 0, 0);
    }
    else if (radiovalue == 2) {
        ctx.drawImage(background2, 0, 0);
    }
    else if (radiovalue == 3) {
        ctx.drawImage(background3, 0, 0);
    }
    else if (radiovalue == 4) {
        ctx.drawImage(background4, 0, 0);
    }
    else if (radiovalue == 5) {
        ctx.drawImage(background5, 0, 0);
    }
    let name = document.getElementById("name").value;
    ctx.font = "500 34px 'Roboto', sans-serif";
    ctx.fillText(name, canvas.width / 2, 166);

}



function to_image() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    generateImg()

    var link = document.getElementById('link');
    link.setAttribute('download', 'eCard.png');
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    img.crossOrigin = "anonymous";
}