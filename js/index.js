$(document).ready(() => {
  const game = new Game();
  game.start();

  $(document).on("keydown", e => {
    if (e.keyCode == 38) game.ball.initMovement();
  });
});

function showCanvas() {
  $("#instructions").css({ display: "none" });
  $("#wrapper").css({ display: "block" });
}