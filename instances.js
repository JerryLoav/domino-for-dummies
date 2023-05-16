const fondo = new Background();
//const domino01 = new ficha00()
const arregloClasesJ1 = []
const arregloClasesJ2 = []
const arregloTablero = []
function imprimirFichas(){
    for (let i = 0; i < fichasJugador1.length; i++) {
         let nombreFichaString= "ficha"+fichasJugador1[i][0]+fichasJugador1[i][1]
          const nombreFicha = new ficha(fichasJugador1[i][0],fichasJugador1[i][1])
                nombreFicha.x=10
                nombreFicha.y=i*100+10
                nombreFicha.xFinal = nombreFicha.x + nombreFicha.width
                nombreFicha.yFinal = nombreFicha.y + nombreFicha.height
                arregloClasesJ1.push(nombreFicha)
        }   
        console.log("arreglo de clases j1 ",arregloClasesJ1)
    for (let j = 0; j < fichasJugador2.length; j++) {
       let nombreFichaStringJ2 = "ficha"+fichasJugador2[j][0]+fichasJugador2[j][1]
        const nombreFichaJ2 = new ficha(fichasJugador2[j][0],fichasJugador2[j][1])
        nombreFichaJ2.x= canvas.width - 35
        nombreFichaJ2.y= j*100+10
        nombreFichaJ2.xFinal = nombreFichaJ2.x + nombreFichaJ2.width
        nombreFichaJ2.yFinal = nombreFichaJ2.y + nombreFichaJ2.height
        arregloClasesJ2.push(nombreFichaJ2)
       } 
    console.log("arreglo de clases j2",arregloClasesJ2)
    for(let k = 0; k < fichasTotal.length; k++){    
    let nombreFichaLibre = "ficha"+fichasTotal[k][0]+fichasTotal[k][1]
    const nombreFichaJuego = new ficha(fichasTotal[k][0],fichasTotal[k][1])
    nombreFichaJuego.x= canvas.width/2
    nombreFichaJuego.y= canvas.height/2
}
    }
imprimirFichas()

//const domino00 = ficha00();

