function imprimirFichas(angulo, fichaTablero) {
  new Background();

  for (let i = 0; i < fichasJugador1.length; i++) {
    const fichaP1 = new ficha(fichasJugador1[i].top, fichasJugador1[i].bottom);

    fichasJugador1[i].x = 10;
    fichasJugador1[i].y = i * 100 + 10;
    fichasJugador1[i].xFinal = fichasJugador1[i].x + fichaP1.width;
    fichasJugador1[i].yFinal = fichasJugador1[i].y + fichaP1.height;

    fichaP1.x = 10;
    fichaP1.y = i * 100 + 10;
    fichaP1.xFinal = fichaP1.x + fichaP1.width;
    fichaP1.yFinal = fichaP1.y + fichaP1.height;
  }

  for (let j = 0; j < fichasJugador2.length; j++) {
    const fichaP2 = new ficha(fichasJugador2[j].top, fichasJugador2[j].bottom);

    fichasJugador2[j].x = canvas.width - 35;
    fichasJugador2[j].y = j * 100 + 10;
    fichasJugador2[j].xFinal = fichasJugador2[j].x + fichaP2.width;
    fichasJugador2[j].yFinal = fichasJugador2[j].y + fichaP2.height;

    fichaP2.x = canvas.width - 35;
    fichaP2.y = j * 100 + 10;
    fichaP2.xFinal = fichaP2.x + fichaP2.width;
    fichaP2.yFinal = fichaP2.y + fichaP2.height;
  }

  for (let k = 0; k < fichasTablero.length; k++) {
    if (fichasTablero[k]) {
      let fichaJuego;

      if (!fichasTablero[k].rotado) {
        if (
          angulo &&
          fichasTablero[k].top === fichaTablero.top &&
          fichasTablero[k].bottom === fichaTablero.bottom
        ) {
          fichasTablero[k].rotado = true;

          fichaJuego = new ficha(
            fichasTablero[k].top,
            fichasTablero[k].bottom,
            true
          );
        } else {
          fichaJuego = new ficha(
            fichasTablero[k].top,
            fichasTablero[k].bottom,
            false
          );
        }
      } else {
        fichaJuego = new ficha(
          fichasTablero[k].top,
          fichasTablero[k].bottom,
          fichasTablero[k].rotado
        );
      }

      fichaJuego.x = canvas.width / 2;
      const mitadCanvasAlto = canvas.height / 5;
      fichaJuego.y = mitadCanvasAlto + k * 50;
    }
  }
}
imprimirFichas();

const dibujarSegunGrados = (grados) => {
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(ficha, -ficha.width / 2, -ficha.width / 2);
  ctx.restore();
};
