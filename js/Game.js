function Game(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.intervalGameTime = 50;
  this.numBricks = 15;
  this.discoveredLevels = 0;

  this.player = new Player(canvas, ctx);
  this.ball = new Ball(this.player.x, this.player.y, canvas, ctx);
  this.bricks = this._createBricksArray();
  this.movePlayer = false;
  this.moveBall = false;
}

Game.prototype.start = function() {
  this.gameIntervalId = setInterval(
    this.updateState.bind(this),
    this.intervalGameTime
  );
};

Game.prototype.updateState = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  if (this.moveBall) this.ball.move(this);
  this.ball.draw();
  this.player.draw();
  this.bricks.forEach(e => e.draw());
  this._drawProgress()
  if(this.discoveredLevels === 3){
    // this.stop()
    $('#ver-cv').removeAttr("disabled")
  }
};

Game.prototype._createBricksArray = function() {
  let column = (row = 0);
  return Array.apply(null, { length: this.numBricks }).map((e, i) => {
    e = new Brick(this.canvas, this.ctx);
    e.x = column * (e.width + e.padding) + e.offsetLeft;
    e.y = row * (e.height + e.padding) + e.offsetTop;

    if(i=== 2 || i === 5 || i === 13) e.hasInfo = true

    column++;
    i++;
    if (i % 5 === 0) {
      row++;
      column = 0;
    }

    return e;
  });
};

Game.prototype._drawProgress = function() {
  $('progress').attr("value", this.discoveredLevels*33.3333333 )
};