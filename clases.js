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

