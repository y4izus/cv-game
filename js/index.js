function initGame() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const game = new Game(canvas, ctx);
  game.start();

  $("#instructions").css({ display: "none" });
  $("#wrapper").css({ display: "block" });

  //TODO improve movement
  $(document).on("keydown", e => {
    if (e.keyCode == 38) game.moveBall = true;
    if (e.keyCode == 39 && game.player.x < canvas.width - game.player.width)
      game.player.move('right');
    if (e.keyCode == 37 && game.player.x > 0) 
      game.player.move('left');
  });
}

function verCV(){
  $("#wrapper").css({ display: "none" });
  $("#cv").css({ display: "block" });
}