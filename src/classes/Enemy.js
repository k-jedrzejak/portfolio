export default class Enemy {
  width = 44;
  height = 32;
  imageLoaded = false;

  constructor(x, y, imageSrc) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
    };
    this.image.src = imageSrc;
  }

  draw(ctx) {
    if (this.imageLoaded) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  collideWith(sprite) {
    return (
      this.x + this.width > sprite.x &&
      this.x < sprite.x + sprite.width &&
      this.y + this.height > sprite.y &&
      this.y < sprite.y + sprite.height
    );
  }
}
