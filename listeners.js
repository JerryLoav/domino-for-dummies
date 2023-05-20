canvas.addEventListener("click", (e) => {
  let x = e.pageX - canvasLeft;
  let y = e.pageY - canvasTop;

  fichasJugador1.forEach((ficha, i) => {
    if (y > ficha.y && y < ficha.yFinal && x > ficha.x && x < ficha.xFinal) {
      if (turno % 2 !== 0) {
        if (
          [cabeza, cola].includes(ficha.top) ||
          [cabeza, cola].includes(ficha.bottom)
        ) {
          if (cabeza === cola) {
            const posicion = prompt("En donde quieres poner la ficha?");
            if (posicion === "arriba") {
              fichasJugador1.splice(i, 1);
              fichasTablero.unshift(ficha);
              cabeza = ficha.top === cabeza ? ficha.bottom : ficha.top;

              clearCnavas();
              imprimirFichas();
              turno++;
              return;
            } else {
              fichasJugador1.splice(i, 1);
              fichasTablero.push(ficha);
              cola = ficha.bottom === cola ? ficha.top : ficha.bottom;

              clearCnavas();
              imprimirFichas();
              turno++;

              return;
            }
          }
          ordenFicha(ficha, i, fichasJugador1);
        }
      } else {
        alert("es el turno del jugador 2");
      }
    }
  });

  fichasJugador2.forEach((ficha, i) => {
    if (y > ficha.y && y < ficha.yFinal && x > ficha.x && x < ficha.xFinal) {
      if (turno % 2 === 0) {
        if (
          [cabeza, cola].includes(ficha.top) ||
          [cabeza, cola].includes(ficha.bottom)
        ) {
          if (cabeza === cola) {
            const posicion = prompt("En donde quieres poner la ficha?");
            if (posicion === "arriba") {
              fichasJugador2.splice(i, 1);
              fichasTablero.unshift(ficha);
              cabeza = ficha.top === cabeza ? ficha.bottom : ficha.top;

              clearCnavas();
              imprimirFichas();
              turno++;
              return;
            } else {
              fichasJugador2.splice(i, 1);
              fichasTablero.push(ficha);
              cola = ficha.bottom === cola ? ficha.top : ficha.bottom;

              clearCnavas();
              imprimirFichas();
              turno++;

              return;
            }
          }
          ordenFicha(ficha, i, fichasJugador2);
        }
      } else {
        alert("es el turno del jugador 1");
      }
    }
  });
});

const ordenFicha = (ficha, index, array) => {
  if (ficha.top === cabeza && ficha.bottom === cola) {
    console.log("En donde quieres poner la ficha");
    return;
  } else if (ficha.top === cabeza) { 
    array.splice(index, 1);
    fichasTablero.unshift(ficha);
    cabeza = ficha.bottom;
    clearCnavas();
    ficha.angle = 180
    console.log ("soy ficha ",ficha)
    imprimirFichas(180, ficha);
    turno++;
    
    return;
  } else if (ficha.bottom === cola) {
    array.splice(index, 1);
    fichasTablero.push(ficha); 
    cola = ficha.top;
    clearCnavas();
    ficha.angle = 180
    console.log ("soy ficha ", ficha)
    imprimirFichas(180, ficha);
    turno++;
    
    return;
  } else if (ficha.top === cola) {
    array.splice(index, 1);
    fichasTablero.push(ficha);
    cola = ficha.bottom;

    clearCnavas();
    imprimirFichas();
    turno++;
    return;
  } else {
    array.splice(index, 1);
    fichasTablero.unshift(ficha);
    cabeza = ficha.top;

    clearCnavas();
    imprimirFichas();
    turno++;
    return;
  }
};

