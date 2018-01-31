class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.intervalGameTime = 50;
    this.numBricks = 15;
    this.discoveredLevels = 0;

    this.player = new Player(canvas, ctx);
    this.showPlayer = true;
    this.moveRight = false;
    this.moveLeft = false;
    this.ball = new Ball(this.player.x, this.player.y - 10, canvas, ctx);
    this.bricks = this._createBricksArray();

    this.showLogo = false;
    this.logo = {
      height: canvas.width * 0.15,
      width: canvas.width * 0.15,
      x: (canvas.width - this.player.width) / 2,
      y: 0,
      img: new Image()
    };
    this.logo.img.src =
      "https://avatars2.githubusercontent.com/u/2041155?s=200&v=4";

    this.imgFinal = {
      height: canvas.width * 0.35,
      width: canvas.width * 0.35,
      img: new Image()
    };
    this.imgFinal.img.src = "./img/final-img.png";
  }

  start() {
    this.gameIntervalId = setInterval(
      this.updateState.bind(this),
      this.intervalGameTime
    );
  }

  updateState() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.ball.isMoving) this.ball.move(this);
    else {
      this.ball.x = this.player.x;
      this.ball.y = this.player.y - 10;
    }
    if (this.discoveredLevels < 3) this.ball.draw();

    if (this.player.x > this.canvas.width - this.player.width)
      this.moveRight = false;
    if (this.player.x < 0) this.moveLeft = false;
    if (this.moveRight) this.player.move("right");
    if (this.moveLeft) this.player.move("left");
    if (this.showPlayer) this.player.draw();

    this.bricks.forEach(e => e.draw());

    if (this.discoveredLevels === 1) $("#education").removeAttr("hidden");
    if (this.discoveredLevels === 2) $("#work-exp").removeAttr("hidden");
    if (this.discoveredLevels === 3) {
      $("#lang").removeAttr("hidden");
      this._stop();
    }

    if (this.showLogo) this._showLogoAnimation();

    if (this._logoHitsPlayer()) this._showFinal();
  }

  _createBricksArray() {
    let column = 0;
    let row = 0;

    return Array.apply(null, { length: this.numBricks }).map((e, i) => {
      e = new Brick(this.canvas, this.ctx);
      e.x = column * (e.width + e.padding) + e.offsetLeft;
      e.y = row * (e.height + e.padding) + e.offsetTop;

      if (i === 2 || i === 5 || i === 13) e.hasInfo = true;

      column++;
      i++;
      if (i % 5 === 0) {
        row++;
        column = 0;
      }

      return e;
    });
  }

  _stop() {
    this.showLogo = true;
    this.moveBall = false;
    this.discoveredLevels++;
  }

  _showLogoAnimation() {
    this.ctx.drawImage(
      this.logo.img,
      this.logo.x,
      this.logo.y,
      this.logo.width,
      this.logo.height
    );
    this.logo.y += 7;
    if (this.showPlayer) this.player.center();
  }

  _logoHitsPlayer() {
    return (
      this.logo.y + this.logo.height > this.canvas.height - this.player.height
    );
  }

  _showFinal() {
    this.showPlayer = false;
    this.showLogo = false;

    this.ctx.drawImage(
      this.imgFinal.img,
      this.canvas.width - this.imgFinal.width,
      this.canvas.height - this.imgFinal.height,
      this.imgFinal.width,
      this.imgFinal.height
    );
    $("#final-link").removeAttr("hidden");
  }
}
