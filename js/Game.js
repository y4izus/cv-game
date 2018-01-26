function Game(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.intervalGameTime = 50;

  this.ball = new Ball(50, 50, ctx);
  this.player = new Player(canvas, ctx);
}

Game.prototype.start = function() {
  this.gameIntervalId = setInterval(
    this.updateState.bind(this),
    this.intervalGameTime
  );
};

Game.prototype.updateState = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ball.draw();
  this.player.draw();
};
