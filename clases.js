class Background {
    constructor(){
        this.x=0
        this.y=0
        this.width = canvas.width
        this.height = canvas.height
        this.img = new Image();
        this.img.src = "background.jpg"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha {
    constructor(top,bottom){       
        this.top = top
        this.bottom = bottom
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = `${top}${bottom}.png`
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

/*class ficha00 {
    constructor(){
        this.top = 0
        this.bottom = 0
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/00.png"
        this.img.onload = () => {
            this.draw()
            
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
        //ctx.rotate(90)
    }
}

class ficha01 {
    constructor(){
        this.top = 0
        this.bottom = 1
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/ficha01.jpg"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}


class ficha02 {
    constructor(){
        this.top = 0
        this.bottom = 2
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/02.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha03 {
    constructor(){
        this.top = 0
        this.bottom = 3
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/03.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha04 {
    constructor(){
        this.top = 0
        this.bottom = 4
        this.x 
        this.y 
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/04.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha11 {
    constructor(){
        this.top = 1
        this.bottom = 1
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/11.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha12 {
    constructor(){
        this.top = 1
        this.bottom = 2
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/12.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha13 {
    constructor(){
        this.top = 1
        this.bottom = 3
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/13.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha14 {
    constructor(){
        this.top = 1
        this.bottom = 4
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/14.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha22 {
    constructor(){
        this.top = 2
        this.bottom = 2
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/22.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha23 {
    constructor(){
        this.top = 2
        this.bottom = 3
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/23.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha24 {
    constructor(){
        this.top = 2
        this.bottom = 4
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/24.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha33 {
    constructor(){
        this.top = 3
        this.bottom = 3
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/33.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha34 {
    constructor(){
        this.top = 3
        this.bottom = 4
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/34.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

class ficha44 {
    constructor(){
        this.top = 4
        this.bottom = 4
        this.x
        this.y
        this.width = 25
        this.height = 50
        this.img = new Image();
        this.img.src = "C:/Users/yolal/OneDrive/Escritorio/IRONHACK/6TA_SEMANA/Juego/44.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}*/