let screen_2 = document.getElementById("canvas-box");
let pincel_2 = screen_2.getContext("2d");
let ancho = screen_2.clientWidth;
let alto = screen_2.clientHeight;

function drawArc(color, x_center, y_center, radius, initialAngle, lastAngle, turningSense){
    pincel_2.fillStyle = color;
    pincel_2.beginPath();
    pincel_2.arc(x_center, y_center, radius, initialAngle, lastAngle, turningSense);
    pincel_2.fill();
}

function pacman(x, y , radius){
    //cara
    drawArc("yellow", x, y, radius, 0, 2*Math.PI, true);

    //ojo izquierdo
    drawArc("black", x - (radius/2), y - (radius/2), (4*radius/15), 0, 2*Math.PI, true);

    //ojo derecho
    drawArc("black", x + (radius/2), y - (radius/2), (4*radius/15) , 0, 2*Math.PI, true);

    //boca
    drawArc("black", x , y , (2*radius/3) , Math.PI/6 , 5*Math.PI/6, false);

    //lengua
    drawArc("red", x , y + radius/3 , radius/5 , 0 , Math.PI , false);
}

function clearScreen_2(){
    pincel_2.clearRect(0,0,ancho,alto);
}

let x_pacman = 0;
let sentido = 1;

function updateScreen(){
    clearScreen_2();
    if( x_pacman > ancho-100 ){
        sentido = -1;
    }
    if( x_pacman < 0 ){
        sentido = 1;
    }
    pacman(50+x_pacman,50,50);
    x_pacman += sentido;
}

setInterval( updateScreen, 50 );