class Game {
   constructor() {
     this.ball = new Ball(50, 50)
     this.intervalGameTime = 50
   }

   start() {
    this.gameIntervalId = setInterval(this.updateState, this.intervalGameTime)
   }

   updateState() {
      
   }
 }

