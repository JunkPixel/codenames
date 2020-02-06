class Canvas {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    this.hidden = true;
    this.positionX_keep = 25;
    this.positionX_going = 50;
    this.audio = new Audio('./audio/bullet.mp3');
  }
  clear() {
    this.ctx.clearRect(0, 0, 150, 150);
  }

  updateCanvas() {
    let hue = Math.random() * 359;
    let color = 'hsl(' + hue + ',100%,50%)';
    this.ctx.fillStyle = color;
    this.ctx.font = '40px serif';
    this.ctx.fillText('Keep', this.positionX_keep, 50);
    this.ctx.fillText('Going', this.positionX_going, 80);
    this.audio.play();

    setTimeout(() => {
      this.hidden = true;
      this.ctx.clearRect(0, 0, 150, 150);
    }, 3000);
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
