canvas.addEventListener("click", e =>{
    let x = e.pageX -canvasLeft
    let y = e.pageY - canvasTop
    console.log(x, y)
    arregloClasesJ1.forEach(function(ficha){
        if (y > ficha.y && y < ficha.yFinal && x > ficha.x && x < ficha.xFinal){
            if([cabeza,cola].includes(ficha.top )|| [cabeza,cola].includes(ficha.bottom)){
                if(cabeza === cola){
                    console.log("En donde quieres poner la ficha")
                }
            console.log("le di clik a una ficha", ficha)}
        }
    })
})  

