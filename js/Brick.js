function Brick(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  
  this.width = canvas.width * 0.15;
  this.height = canvas.width * 0.03;
  this.padding = 10;
  this.offsetTop = canvas.width * 0.02;
  this.offsetLeft = canvas.width * 0.1;

  this.x;
  this.y;
  this.status = 1;
  this.hasInfo = false;
}

Brick.prototype.draw = function() {
  if (this.status == 1) {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);

    // If the brick contains information, draw a interrogation box
    // If not, draw a coloured brick
    var img = new Image();
    img.src = "http://www.fayerwayer.com/up/2009/03/mariobros-320x210.png";

    if (this.hasInfo) {
      this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    } else {
      this.ctx.fillStyle = "#000000";
      this.ctx.fill();
    }

    this.ctx.closePath();
  }
};
