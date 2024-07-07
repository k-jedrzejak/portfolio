export default class Player {
  rightPressed = false;
  leftPressed = false;
  shootPressed = false;

  constructor(canvas, velocity, bulletController) {
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;
    this.image = null;

    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }

  setImage(image) {
    this.image = image;
  }

  draw(ctx) {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    if (this.shootPressed) {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
    this.move();
    this.collideWithWalls();
  }

  collideWithWalls() {
    // Prevent the player from moving out of the canvas bounds
    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width));
  }

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x -= this.velocity;
    }
  }

  handleKeydown = (event) => {
    switch (event.code) {
      case "ArrowRight":
        this.rightPressed = true;
        break;
      case "ArrowLeft":
        this.leftPressed = true;
        break;
      case "Space":
        this.shootPressed = true;
        break;
    }
  };

  handleKeyup = (event) => {
    switch (event.code) {
      case "ArrowRight":
        this.rightPressed = false;
        break;
      case "ArrowLeft":
        this.leftPressed = false;
        break;
      case "Space":
        this.shootPressed = false;
        break;
    }
  };
}
