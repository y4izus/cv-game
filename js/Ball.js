class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this._draw();
  }

  _draw() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
  }

  initMovement() {
    console.log("Inicia el movimiento de la bola");
    // this.x += dx
    // this.y += dy
  }
}
