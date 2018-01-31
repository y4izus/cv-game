class Player {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.height = canvas.width * 0.2;
    this.width = canvas.width * 0.2;
    this.speed = 10;
    this.img = new Image();
    this.img.src =
      "./img/player.png";

    this.center();
    this.draw();
  }
  
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    switch (direction) {
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
  }

  center() {
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - this.height;
  }
}
