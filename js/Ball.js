function Ball(x, y, ctx) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.radius = 10;
  this.speed = 7;
  this.intervalBallTime = 50;
  this.isMoving = false;
  
  this.draw();
}

Ball.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.fillStyle = "#000000";
  this.ctx.fill();
};

Ball.prototype.initMovement = function () {
  this.isMoving = true;
};

Ball.prototype.move = function (){
  this.x += this.speed;
  this.y += this.speed;
}
