$(document).ready(() => {
  

});

function initGame() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const game = new Game(canvas, ctx);
  game.start();

  $("#instructions").css({ display: "none" });
  $("#wrapper").css({ display: "block" });

  $(document).on("keydown", e => {
    if (e.keyCode == 38) game.ball.initMovement();
  });
}