function Player(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.height = canvas.width * 0.2;
  this.width = canvas.width * 0.2;
  this.speed = 7;
  this.img = new Image();
  this.img.src =
  "https://www.dropbox.com/s/esxajjnx8emcytr/personbar.png?raw=1";
  
  this.center();
  this.draw();
}

Player.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Player.prototype.move = function(direction) {
  switch (direction) {
    case "left":
      this.x -= this.speed;
      break;
    case "right":
      this.x += this.speed;
      break;
  }
};

Player.prototype.center = function() {
  this.x = (this.canvas.width - this.width) / 2;
  this.y = this.canvas.height - this.height;
};
