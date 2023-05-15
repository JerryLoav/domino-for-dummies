const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let canvasLeft = canvas.offsetLeft
let canvasTop = canvas.offsetTop
let turno=1

let fichasTotal = 
[
    [0,0], 
    [0,1],
    [0,2],
    [0,3],
    [0,4],
    [1,1],
    [1,2],
    [1,3],
    [1,4],
    [2,2],
    [2,3],
    [2,4],
    [3,3],
    [3,4],
    [4,4]
]

let fichasJugador1 = []
let fichasJugador2 = []
let fichaDomino
let requestID
let cabeza
let cola

const fichasRandom = () => 
{
    let indexRandom 
    for (let i = 0; i < 7; i++) {
        indexRandom = Math.floor(Math.random()*fichasTotal.length)
        fichasJugador1.push(fichasTotal[indexRandom])
        fichasTotal.splice(indexRandom,1)
     }
     for (let j = 0; j < 7; j++) {
        indexRandom = Math.floor(Math.random()*fichasTotal.length)
        fichasJugador2.push(fichasTotal[indexRandom])
        fichasTotal.splice(indexRandom,1)
     }
     cabeza= fichasTotal[0][0]
     cola= fichasTotal [0][1]
}

const confirmacionDeFichaInicial = () =>{
    let ladoIzquierdo = fichasTotal [0]
    let ladoDerecho = fichasTotal[1]
    for (let i = 0; i < fichasJugador1.length; i++) {
        if (fichasJugador1.includes(ladoIzquierdo) || fichasJugador1.includes(ladoDerecho)){
            return true
        }
        
    }
}



 function clearCnavas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
 }

 function startGame(){
    if(!requestID){
        requestID = requestAnimationFrame(fichasRandom)
        console.log(fichasJugador1)
        console.log(fichasJugador2)
        console.log(fichasTotal)
    }
 }

 function posicionarFichaSeleccionada(ficha, cabeza, cola){
    
    if (cabeza === cola) {
        console.log("En que lugar quieres poner la ficha")
        return
    }
    
    if (ficha.includes(cabeza)){
        console.log(fichasTotal, '+++++++------')
        fichasTotal.push(ficha)
        console.log("coincidió con la cabeza", ficha)
        console.log(fichasTotal, '-----------')
        return
    }
    if(ficha.includes(cola)){
        
        fichasTotal.push(ficha)
        console.log("coincidió con la cola")
        return
    }
    
    
 }

 startGame()
 posicionarFichaSeleccionada([0,0],0,2)