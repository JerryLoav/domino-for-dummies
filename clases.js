class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "./background.jpg";
    this.img.onload = () => {
      this.draw();
    };
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class ficha {
  constructor(top, bottom, rotado) {
    this.top = top;
    this.bottom = bottom;
    this.x;
    this.y;
    this.rotado = rotado;
    this.width = 25;
    this.height = 50;
    this.img = new Image();

console.log('this.rotado', this.rotado);

    this.img.src = `./${this.rotado ? bottom : top}${this.rotado ? top : bottom}.png`;
    this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y,this.width,this.height)
            ctx.restore()
    };
  }
  draw() {
    //ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
