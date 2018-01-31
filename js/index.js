function initGame() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const game = new Game(canvas, ctx);
  game.start();

  $("#instructions").css({ display: "none" });
  $("#wrapper").css({ display: "flex", justifyContent: "space-around" });

  $(document).on("keydown", e => {
    if (e.keyCode == 38) game.ball.isMoving = true;
    if (e.keyCode == 39 && game.player.x < canvas.width - game.player.width)
      game.moveRight = true;
    if (e.keyCode == 37 && game.player.x > 0) game.moveLeft = true;
  });

  $(document).on("keyup", e => {
    if (e.keyCode == 39) game.moveRight = false;
    if (e.keyCode == 37) game.moveLeft = false;
  });
}
