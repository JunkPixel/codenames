class Canvas {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    let hidden = 'false';
    this.positionX = -200;
    
  }
  clear(){
    this.ctx.clearRect(0, 0, 150, 150);
  }

  

  updateCanvas() {
    
    this.ctx.clearRect(0, 0, 480, 270);
    this.ctx.fillStyle = 'green';
    this.ctx.font = '40px serif';
    this.ctx.fillText('2 Points!', this.postionX, 90);
    this.positionX +=20;

    if(this.positionX > 200){
      this.positionX = -200;
    }
  
  
  }

  paint() {
    this.updateCanvas();
  }

  loop () {
    this.clear();

    this.paint();

    if (this.hidden = 'true') {
      setTimeout(() => {
        this.loop();
      }, hidden = 'false');
    }
  }
  
}



