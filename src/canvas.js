class Canvas {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    this.hidden = true;
  }
  clear() {
    this.ctx.clearRect(0, 0, 150, 150);
  }

  updateCanvas() {
    this.ctx.fillStyle = 'green';
    this.ctx.font = '40px serif';
    this.ctx.fillText('Nice!', 50, 90);
    setTimeout(() => {
      this.hidden = true;
      this.ctx.clearRect(0, 0, 150, 150);
    }, 2000);
  }

  paint() {
    this.updateCanvas();
  }

  loop() {
    if (!this.hidden) {
      this.paint();
    }
  }
}
