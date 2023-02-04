/*    Whiteboard Canvas   */
let screen = document.getElementById("lienzo-1")
let pincel = screen.getContext("2d");
let btn_reset = document.getElementById("btn-reset-id");
let text = document.getElementById("paragraph-container");

let radiusCircle = 3;
let colors = ["red", "green", "blue", "yellow", "violet", "orange"];
let canDraw = false;
let actualColor =  "blue";
let screenWidth = screen.width;
let screenHeight = screen.height;
let resetWidth = screenWidth - 75.5;
let resetHeight = screenHeight - 50.5;

function drawRectangle(x, y, width, height, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.fillRect(x ,y , width, height);
    pincel.fill();
}

function palette(){
    let x = 0;
    for( let i=0; i<colors.length/2 ; i++ ){
        drawRectangle(x,0,25,25,colors[i]);
        drawRectangle(x, 25,25,25,colors[i+3]);
        x+=25;
    }
}

function drawCircle(x, y, actualColor){
    if( canDraw ){
        /*selectColorPalette(event);*/
        pincel.fillStyle = actualColor;
        pincel.beginPath();
        pincel.arc(x,y,radiusCircle,0,2*Math.PI);
        pincel.fill();
    }        
}

function enableDraw(){
    canDraw = true;
}

function disableDraw(){
    canDraw = false;
}

function canDesignArea(xCoordinate, yCoordinate){
    if( xCoordinate >= 0 && xCoordinate < 80 && yCoordinate >= 0 && yCoordinate < 55){
        return false;
    }
    else{
        return true;
    }
}

function captureMouseMovement(event){
    let x = event.pageX - screen.offsetLeft - 3;
    let y = event.pageY - screen.offsetTop - 3;

    if (canDesignArea(x,y)){
        drawCircle(x ,y , actualColor);
    }
}

function selectColorPalette(event){
    x = event.pageX - screen.offsetLeft -3;
    y = event.pageY - screen.offsetTop - 3;
    if( x > 0 && x < 25 && y > 0 && y < 25){
        actualColor = colors[0];
        return 
    }
    else if( x > 25 && x < 50 && y > 0 && y < 25){
        actualColor = colors[1];
    }
    else if( x > 50 && x < 75 && y > 0 && y < 25){
        actualColor = colors[2];
    }
    else if( x > 0 && x < 25 && y > 25 && y < 50 ){
        actualColor = colors[3];
    }
    else if( x > 25 && x < 50 && y > 25 && y < 50 ){
        actualColor = colors[4];
    }
    else if( x > 50 && x < 75 && y > 25 && y < 50 ){
        actualColor = colors[5];
    }
}

function clearScreen(){
    pincel.clearRect(75.5,0,resetWidth,screenHeight);
    pincel.clearRect(0,50.5,screenHeight,resetHeight);
}

function writeScreen(){
    text.innerHTML = "Continue Drawing using the mouse";
}

function clearAndWriteScreen(){
    clearScreen();
    writeScreen();
}

screen.onmousemove = captureMouseMovement;
screen.onmousedown = enableDraw;
screen.onmouseup = disableDraw;
palette();
screen.onclick = selectColorPalette;
btn_reset.onclick = clearAndWriteScreen;