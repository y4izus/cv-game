function Game(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.ball = new Ball(50, 50, this.ctx);
  this.intervalGameTime = 50;
}

Game.prototype.start = function() {
  this.gameIntervalId = setInterval(this.updateState.bind(this), this.intervalGameTime);
};

Game.prototype.updateState = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ball.draw()
};
