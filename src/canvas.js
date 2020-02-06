class Canvas {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    this.hidden = true;
    this.positionX_keep = 25;
    this.positionX_going = 50;
    this.audio = new Audio('./audio/bullet.mp3');
    this.hue = 0;
  }
  clear() {
    this.ctx.clearRect(0, 0, 150, 150);
  }

  updateHue() {
    if (this.hue < 359) {
      this.hue += 10;
      console.log(this.hue);
    } else if (this.hue == 360) {
      this.hue *= -1;
      console.log(this.hue);
    } else {
      this.hue += 10;
      console.log(this.hue);
    }
  }

  updateCanvas() {
    console.log('Hello World');
    if (this.hidden === false) {
      let color = 'hsl(' + Math.abs(this.hue) + ',100%,50%)';
      this.audio.play();
      this.ctx.fillStyle = color;

      this.ctx.font = '40px serif';
      this.ctx.fillText('Keep', this.positionX_keep, 50);
      this.ctx.fillText('Going', this.positionX_going, 80);

      setTimeout(() => {
        this.hidden = true;

        this.ctx.fillStyle = color;
        this.clear();
      }, 3000);
    } else {
    }
  }

  paint() {
    this.updateCanvas();
    this.updateHue();
  }

  loop() {
    if (!this.hidden) {
      setTimeout(() => {
        this.updateHue();
        this.paint();
        this.loop();
      }, 100);
    } else {
    }
  }
}
