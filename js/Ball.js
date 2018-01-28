function Ball(x, y, canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.radius = 10;
  this.speedX = 7;
  this.speedY = -7;
  this.intervalBallTime = 50;
  this.isMoving = false;

  this.draw();
}

Ball.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.fillStyle = "#000000";
  this.ctx.fill();
};

Ball.prototype.initMovement = function() {
  this.isMoving = true;
};

Ball.prototype.move = function(player) {
  this.y += this.speedY;
  this.x += this.speedX;
  this._checkCollisionWithCanvas();
  this._checkCollisionWithPlayer(player);
};

Ball.prototype._checkCollisionWithCanvas = function() {
  if (this._hitCanvasTop() || this._hitCanvasBottom()) this.speedY *= -1;
  if (this._hitCanvasLeft() || this._hitCanvasRight()) this.speedX *= -1;
};

Ball.prototype._hitCanvasTop = function() {
  return this.y - this.radius <= 0;
};

Ball.prototype._hitCanvasBottom = function() {
  return this.y >= this.canvas.height - this.radius;
};

Ball.prototype._hitCanvasLeft = function() {
  return this.x - this.radius <= 0;
};

Ball.prototype._hitCanvasRight = function() {
  return this.x >= this.canvas.width - this.radius;
};

Ball.prototype._checkCollisionWithPlayer = function(player) {
  if (this._hitPlayerTop(player)) this.speedY *= -1;
};

Ball.prototype._hitPlayerTop = function(player) {
  return (
    this.y >= this.canvas.height - player.height - this.radius &&
    this.x - this.radius >= player.x &&
    this.x - this.radius <= player.x + player.width
  );
};
