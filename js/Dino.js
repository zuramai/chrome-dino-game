class Dino {
    constructor(el,options) {
        this.canvas = el;
        this.canvas.width = window.innerWidth > options.maxWidth ? options.maxWidth : window.innerWidth;
        this.canvas.height = 150;
        this.ctx = this.canvas.getContext('2d');
        this.sprite = null;
        this.speed = 5;
        this.dx = 0;
        this.dy = 0;
        this.backgroundDx = 0;
        this.dinos = [
            { sx: 1335, w: 75 },
            { sx: 1510, w: 75 },
            { sx: 1598, w: 75 },
        ]
        this.dino = 0;
    }
    init() {
        // Init Sprite
        this.sprite = new Image;
        this.sprite.src = "images/sprite.png";
    }
    drawDino() {
        this.ctx.drawImage(this.sprite, this.dinos[this.dino].sx, 0, 95, 100, 80, this.canvas.height-75, 75, 75)
    }
    drawBackground() {
        // Draw Ground
        this.ctx.drawImage(this.sprite, 0, this.sprite.height-30, this.sprite.width, 30, this.backgroundDx, this.canvas.height-30, this.canvas.width, 30)
        this.ctx.drawImage(this.sprite, 0, this.sprite.height-30, this.sprite.width, 30, this.canvas.width+this.backgroundDx, this.canvas.height-30, this.canvas.width, 30)
    }
    draw() {
        this.drawBackground();
        this.drawDino();
    }
    updateBackground() {
        this.backgroundDx -= this.speed;
        // Go back to first 
        if(this.backgroundDx < -this.canvas.width) this.backgroundDx = 0;
    }
    updateDino() {
        this.dino = this.dino < this.dinos.length-1 ? this.dino+1 : 0;
    }
    update() {
        this.updateBackground() 
        this.updateDino();
    }
    render() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.width)
        this.draw();
        this.update();
        requestAnimationFrame(() => this.render());
    }
}