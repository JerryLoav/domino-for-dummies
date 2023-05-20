const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;
let turno = 1;

const fichasTotalv2 = [
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 0,
    bottom: 0,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 0,
    bottom: 1,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 0,
    bottom: 2,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 0,
    bottom: 3,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 0,
    bottom: 4,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 1,
    bottom: 1,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 1,
    bottom: 2,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 1,
    bottom: 3,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 1,
    bottom: 4,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 2,
    bottom: 2,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 2,
    bottom: 3,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 2,
    bottom: 4,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 3,
    bottom: 3,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 3,
    bottom: 4,
  },
  {
    x: null,
    y: null,
    xFinal: null,
    yFinal: null,
    top: 4,
    bottom: 4,
  },
];

const fichasJugador1 = [];
const fichasJugador2 = [];
const fichasTablero = [];
let cabeza;
let cola;

const revolver = (arrayOriginal) => {
  return arrayOriginal
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const fichasRandom = () => {
  const sopa = revolver(fichasTotalv2);
  sopa.map((ficha) => {
    if (fichasTablero.length === 0) {
      fichasTablero.push(ficha);
    } else if (fichasJugador1.length === fichasJugador2.length) {
      fichasJugador1.push(ficha);
    } else if (fichasJugador1.length > fichasJugador2.length) {
      fichasJugador2.push(ficha);
    }
  });
  cabeza = fichasTablero[0].top;
  cola = fichasTablero[0].bottom;
};

function clearCnavas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function startGame() {
  await fichasRandom();
}

startGame();
