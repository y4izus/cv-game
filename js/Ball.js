class Ball {
  constructor(x, y, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.speedX = 10;
    this.speedY = -10;
    this.intervalBallTime = 50;

    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
  }

  move(game) {
    this.y += this.speedY;
    this.x += this.speedX;
    this._checkCollisionWithBricks(game);
    this._checkCollisionWithPlayer(game.player);
    this._checkCollisionWithCanvas();
  }
  _checkCollisionWithCanvas() {
    if (this._hitCanvasTop() || this._hitCanvasBottom()) this.speedY *= -1;
    if (this._hitCanvasLeft() || this._hitCanvasRight()) this.speedX *= -1;
  }
  _hitCanvasTop() {
    return this.y - this.radius <= 0;
  }
  _hitCanvasBottom() {
    return this.y >= this.canvas.height - this.radius;
  }

  _hitCanvasLeft() {
    return this.x - this.radius <= 0;
  }

  _hitCanvasRight() {
    return this.x >= this.canvas.width - this.radius;
  }

  _checkCollisionWithPlayer(player) {
    if (this._hitPlayerTop(player)) this.speedY *= -1;
  }

  _hitPlayerTop(player) {
    return (
      this.y + this.radius >= player.y &&
      this.x >= player.x &&
      this.x + this.radius <= player.x + player.width
    );
  }

  _checkCollisionWithBricks(game) {
    game.bricks.forEach(e => {
      if (e.status == 1 && this._hitBrick(e)) {
        this.speedY *= -1;
        e.status = 0;
        if (e.hasInfo) game.discoveredLevels++;
      }
    });
  }

  _hitBrick(brick) {
    return (
      this.x > brick.x &&
      this.x < brick.x + brick.width &&
      this.y > brick.y &&
      this.y < brick.y + brick.height
    );
  }
}
