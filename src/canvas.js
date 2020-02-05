class Canvas {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    let hidden = 'true';
  }

  

  updateCanvas() {
    
    //console.log(color
    this.ctx.clearRect(0, 0, 480, 270);
    this.ctx.fillStyle = color;
    this.ctx.font = '40px serif';
    this.ctx.fillText('2 Points!', 0, 75);
    this.ctx.fill();

    window.requestAnimationFrame(updateCanvas);
  }

  paint() {
    this.updateCanvas();
  }

  loop () {
  

    if (this.isRunning) {
      setTimeout(() => {
        this.loop();
      }, 300 / this.speed);
    }
}
