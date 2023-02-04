let texto = document.getElementById("text_lineas");
let boton = document.getElementById("cajaboton");
boton.addEventListener("click", dibujoPorClick);
let btn_reset2 = document.getElementById("btn-reset-2");

let d = document.getElementById("CajaPapel");
let lienzo = d.getContext("2d");
let ancho = d.width;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorLinea = "#832FDA";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yi = espacio * l;
    xf = espacio * (l+1);
    yf = espacio * (l+1);
    nyi = ancho - yi;
    nxf = ancho - xf;
    dibujarLinea(colorLinea, 0, yi, xf, ancho);
    dibujarLinea(colorLinea, 0, nyi, xf, 0);
    dibujarLinea(colorLinea, xi, 0, ancho, yf);
    dibujarLinea(colorLinea, ancho, yi, nxf, ancho);
    console.log("linea" + l);
  }

  dibujarLinea(colorLinea,1,1,1,ancho-1);
  dibujarLinea(colorLinea,1,ancho-1,ancho-1);
  dibujarLinea(colorLinea,1,1,ancho-1,1);
  dibujarLinea(colorLinea,ancho-1,1,ancho-1,ancho-1);
}

function clearScreen2(){
    lienzo.clearRect(0,0,ancho,ancho);
}

btn_reset2.onclick = clearScreen2;