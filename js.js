var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
/*FFUNCION DE DIBUJAR*/
function dibujador(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

colorcito = document.getElementById("color");
contador = 0;
espaciolineas = 41;
/* ESCUCHADORES DE EVENTOS */
figura1 = document.getElementById("figura1");
figura1.addEventListener("click", dibujadorfigura1);
figura2 = document.getElementById("figura2");
figura2.addEventListener("click", dibujadorfigura2);
figura3 = document.getElementById("figura3");
figura3.addEventListener("click", dibujadorfigura3);

contadorfigura = 0;
function dibujadorfigura1() {
    contadorfigura = 1;
}
function dibujadorfigura2() {
    contadorfigura = 2;
}
function dibujadorfigura3() {
    contadorfigura = 3;
}
/*FUNCIONES DE GENERAR DIBUJOS*/
generardibujo = document.getElementById("generarfigura");

generardibujo.addEventListener("click", generadordefigura);


function generadordefigura() {
    switch (contadorfigura) {
        case 1:
            limpiar()
            contador = 0;
            xf = 0;
            while (contador < espaciolineas) {
                dibujador(colorcito.value, 200, 0, xf, 400)
                xf = xf + 10;
                contador++;
            }
            break
        case 2:
            limpiar()
            contador = 0;
            xf = 0;
            while (contador < espaciolineas) {
                dibujador(colorcito.value, 200, 0, xf, 200)
                xf = xf + 10;
                contador++;

            }
            contador = 0;
            xf = 0;
            while (contador < espaciolineas) {
                dibujador(colorcito.value, 200, 400, xf, 200)
                xf = xf + 10;
                contador++;
            }
            break
        case 3:
            limpiar()
            /**/
            contador = 0;
            xi = 0;
            yi = 0;
            xf = 5;
            yf = 5;

            while (contador < espaciolineas) {
                dibujador(colorcito.value, 0, yi, xf, 400)
                yi = yi + 10;
                xf = xf + 10;
                contador++;
            }
            /**/
            contador = 0;
            xi = 0;
            yi = 0;
            xf = 0;
            yf = 5;

            while (contador < espaciolineas) {
                dibujador(colorcito.value, xi, 0, 400, yf)
                xi = xi + 10;
                yf = yf + 10;
                contador++;
            }
            /**/
            contador = 0;
            xi = 400;
            yi = 0;
            xf = 0;
            yf = 5;

            while (contador < espaciolineas) {
                dibujador(colorcito.value, xi, 0, 0, yf)
                xi = xi - 10;
                yf = yf + 10;
                contador++;
            }
            /**/
            contador = 0;
            xi = 0;
            yi = 0;
            xf = 0;
            yf = 400;

            while (contador < espaciolineas) {
                dibujador(colorcito.value, xi, 400, 400, yf)
                xi = xi + 10;
                yf = yf - 10;
                contador++;
            }
            break
    }

}
/*FUNCION DE LIMPIAR TABLERO*/
var limpiador = document.getElementById("limpiardibujo");
limpiador.addEventListener("click", limpiar);
function limpiar() {
    canvas.width = canvas.width;
}

/*REALIZANDO PROGRAMACION DE DIBUJAR CON MOUSE*/
var canvasdos = document.getElementById("canvasito");
var lienzo2 = canvasdos.getContext("2d");
colorcito2 = document.getElementById("color2");
tamañolienzito = document.getElementById("pixelestamaño");
function dibujador2(color2,tamañolienzo, xinicial2, yinicial2, xfinal2, yfinal2) {
    lienzo2.beginPath();
    lienzo2.strokeStyle = color2;
    lienzo2.lineWidth = tamañolienzo;
    lienzo2.lineCap='round';
    lienzo2.moveTo(xinicial2, yinicial2);
    lienzo2.lineTo(xfinal2, yfinal2);
    lienzo2.stroke();
    lienzo2.closePath();
}


/* Funcion de detectar cual es el punto inicial */
canvasdos.addEventListener("mousedown",mousepresionado);
var xi2 = 0;
var yi2 = 0;
function mousepresionado(valorfuncion1){
    xi2 = valorfuncion1.layerX;
    yi2 = valorfuncion1.layerY;
}
canvasdos.addEventListener("mousemove", mousemovimiento);
function mousemovimiento()
{
    canvasdos.addEventListener("mouseup",mousesuelto);
    var xf2 = 0;
    var yf2 = 0;
    function mousesuelto(valorfuncion2)
{
    
    xf2 = valorfuncion2.layerX;
    yf2 = valorfuncion2.layerY;
    
    if(xf2 >= 400){
        xf2 = valorfuncion1.layerX;
    }
    if(yf2 >= 400){
        yf2 = valorfuncion1.layerY;
    }
    dibujador2(colorcito2.value, tamañolienzito.value, xi2,yi2,xf2,yf2)
}
}


var limpiadordos = document.getElementById("limpiardibujodos");
limpiadordos.addEventListener("click", limpiardos);
function limpiardos() {
    canvasdos.width = canvasdos.width;
}