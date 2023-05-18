//const domino01 = new ficha00()
const arregloClasesJ1 = [];
const arregloClasesJ2 = [];
const arregloTablero = [];
function imprimirFichas() {
  const fondo = new Background();
  console.log("fichasJugador1", fichasJugador1.length);
  console.log("fichasJugador2", fichasJugador2.length);
  for (let i = 0; i < fichasJugador1.length; i++) {
    console.log("--------", fichasJugador1[i]);

    const nombreFicha = new ficha(fichasJugador1[i][0], fichasJugador1[i][1]);
    nombreFicha.x = 10;
    nombreFicha.y = i * 100 + 10;
    nombreFicha.xFinal = nombreFicha.x + nombreFicha.width;
    nombreFicha.yFinal = nombreFicha.y + nombreFicha.height;
    if(arregloClasesJ1.length<fichasJugador1.length){
    arregloClasesJ1.push(nombreFicha);}
    console.log("arregloClasesJ1", arregloClasesJ1.length);
  }

  console.log("soy el arreglo de las clases del jugador 1", arregloClasesJ1);
  for (let j = 0; j < fichasJugador2.length; j++) {
    const nombreFichaJ2 = new ficha(fichasJugador2[j][0], fichasJugador2[j][1]);
    nombreFichaJ2.x = canvas.width - 35;
    nombreFichaJ2.y = j * 100 + 10;
    nombreFichaJ2.xFinal = nombreFichaJ2.x + nombreFichaJ2.width;
    nombreFichaJ2.yFinal = nombreFichaJ2.y + nombreFichaJ2.height;
    if(arregloClasesJ2<fichasJugador2.length){
    arregloClasesJ2.push(nombreFichaJ2);
    }
  }

  console.log("soy el arreglo de las clases del jugador 2 ", arregloClasesJ2);
  for (let k = 0; k < fichasTotal.length; k++) {
    if (fichasTotal[k]) {
      const nombreFichaJuego = new ficha(fichasTotal[k][0], fichasTotal[k][1]);
      nombreFichaJuego.x = canvas.width / 2;
      const mitadCanvasAlto = canvas.height / 2 + 25;
      nombreFichaJuego.y = mitadCanvasAlto + k * 50;
    }
  }
}
imprimirFichas();

//const domino00 = ficha00();
