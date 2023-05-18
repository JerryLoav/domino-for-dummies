
canvas.addEventListener("click", e =>{
    let x = e.pageX -canvasLeft
    let y = e.pageY - canvasTop
    console.log("soy las coordenadas ",x, y)
    if(turno % 2 === 1){
    arregloClasesJ1.forEach(function(ficha,i){
        if (y > ficha.y && y < ficha.yFinal && x > ficha.x && x < ficha.xFinal){
            if([cabeza,cola].includes(ficha.top )|| [cabeza,cola].includes(ficha.bottom)){
                if(cabeza === cola){
                    console.log("En donde quieres poner la ficha")
                }
            console.log("le di clik a una ficha", ficha, i)}
            ordenFichaJ1(ficha,i)
            clearCnavas()
            imprimirFichas()
            turno ++
        }
    })}
    else if (turno % 2 === 0){
        arregloClasesJ2.forEach(function(ficha,i){
            if (y > ficha.y && y < ficha.yFinal && x > ficha.x && x < ficha.xFinal){
                if([cabeza,cola].includes(ficha.top )|| [cabeza,cola].includes(ficha.bottom)){
                    if(cabeza === cola){
                        console.log("En donde quieres poner la ficha")
                    }
                console.log("le di clik a una ficha", ficha, i)}
                ordenFichaJ2(ficha,i)
                clearCnavas()
                imprimirFichas()
                turno ++
            }
        })

    }
}) 

const ordenFichaJ1 = (ficha,index) => {
    //console.log("ficha",ficha)
    if((ficha.top === (cabeza) && ficha.bottom === (cola))||(ficha.top === (cola) && ficha.bottom===(cabeza))){
        console.log("En donde quieres poner la ficha")}
    else if(ficha.top=== (cabeza)){            //funciona bien
        //console.log("coincido con cabeza")
        fichasTotal.unshift(fichasJugador1[index])
        arregloTablero.unshift(arregloClasesJ1[index])
        fichasJugador1.splice(index,1)
        arregloClasesJ1.splice(index,1)
        //console.log("fichsas total orden ficha", fichasTotal)
        //console.log("fichas jugador 1 ", fichasJugador1)
        cabeza = ficha.bottom
        //console.log("soy cabeza ",cabeza)
    }
    else if(ficha.bottom === (cola)){                 
        // console.log("coincido con cola")
        fichasTotal.push(fichasJugador1[index])
        arregloTablero.unshift(arregloClasesJ1[index])
        arregloClasesJ1.splice(index,1)
        fichasJugador1.splice(index,1)
        //console.log("fichsas total orden ficha", fichasTotal)
        //console.log("fichas jugador 1 ",fichasJugador1)
        cola = ficha.top
        //console.log("soy cola ",cola)
    }
    else if (ficha.top ===cola){     // funciona bien
        fichasTotal.push(fichasJugador1[index])
        arregloTablero.push(arregloClasesJ1[index])
        arregloClasesJ1.splice(index,1)
        fichasJugador1.splice(index,1)
        cola = ficha.bottom
    }
    else if(ficha.bottom === cabeza){      // funciona bien
        fichasTotal.unshift(fichasJugador1[index])
        arregloTablero.unshift(arregloClasesJ1[index])
        arregloClasesJ1.splice(index,1)
        fichasJugador1.splice(index,1)
        cabeza = ficha.top
    }
}

const ordenFichaJ2 = (ficha,index) => {
    //console.log("ficha",ficha)
    if((ficha.top === (cabeza) && ficha.bottom === (cola))||(ficha.top === (cola) && ficha.bottom===(cabeza))){
        console.log("En donde quieres poner la ficha")}
    else if(ficha.top=== (cabeza)){            //funciona bien
        //console.log("coincido con cabeza")
        fichasTotal.unshift(fichasJugador2[index])
        arregloTablero.unshift(arregloClasesJ2[index])
        fichasJugador2.splice(index,1)
        arregloClasesJ2.splice(index,1)
        //console.log("fichsas total orden ficha", fichasTotal)
        //console.log("fichas jugador 1 ", fichasJugador1)
        cabeza = ficha.bottom
        //console.log("soy cabeza ",cabeza)
    }
    else if(ficha.bottom === (cola)){                 
        // console.log("coincido con cola")
        fichasTotal.push(fichasJugador2[index])
        arregloTablero.unshift(arregloClasesJ2[index])
        arregloClasesJ2.splice(index,1)
        fichasJugador2.splice(index,1)
        //console.log("fichsas total orden ficha", fichasTotal)
        //console.log("fichas jugador 1 ",fichasJugador1)
        cola = ficha.top
        //console.log("soy cola ",cola)
    }
    else if (ficha.top ===cola){     // funciona bien
        fichasTotal.push(fichasJugador2[index])
        arregloTablero.push(arregloClasesJ2[index])
        arregloClasesJ2.splice(index,1)
        fichasJugador2.splice(index,1)
        cola = ficha.bottom
    }
    else if(ficha.bottom === cabeza){      // funciona bien
        fichasTotal.unshift(fichasJugador2[index])
        arregloTablero.unshift(arregloClasesJ2[index])
        arregloClasesJ2.splice(index,1)
        fichasJugador2.splice(index,1)
        cabeza = ficha.top
    }
}
