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

Ball.prototype.move = function(game) {
  this.y += this.speedY;
  this.x += this.speedX;
  this._checkCollisionWithBricks(game);
  this._checkCollisionWithPlayer(game.player);
  this._checkCollisionWithCanvas();
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
    this.y + this.radius >= player.y &&
    this.x >= player.x &&
    this.x + this.radius <= player.x + player.width
  );
};

Ball.prototype._checkCollisionWithBricks = function(game) {
  game.bricks.forEach(e => {
    if (e.status == 1 && this._hitBrick(e)) {
      this.speedY *= -1;
      e.status = 0;
      if(e.hasInfo) game.discoveredLevels++
      console.log(game.discoveredLevels)
    }
  });
};

Ball.prototype._hitBrick = function(brick) {
  return (
    this.x > brick.x &&
    this.x < brick.x + brick.width &&
    this.y > brick.y &&
    this.y < brick.y + brick.height
  );
};
