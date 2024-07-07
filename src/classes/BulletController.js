import Bullet from "./Bullet.js";

export default class BulletController {
  bullets = [];
  timeTillNextBulletAllowed = 0;

  constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
    this.canvas = canvas;
    this.maxBulletsAtATime = maxBulletsAtATime;
    this.bulletColor = bulletColor;
    this.soundEnabled = soundEnabled;

    this.shootSound = new Audio(require('@/assets/game/shoot.wav').default);
    this.shootSound.volume = 0.1;
  }

  draw(ctx) {
    this.bullets = this.bullets.filter(
      (bullet) => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height
    );

    this.bullets.forEach((bullet) => bullet.draw(ctx));
    if (this.timeTillNextBulletAllowed > 0) {
      this.timeTillNextBulletAllowed--;
    }
  }

  collideWith(sprite) {
    const bulletIndex = this.bullets.findIndex((bullet) => bullet.collideWith(sprite));
    if (bulletIndex >= 0) {
      this.bullets.splice(bulletIndex, 1);
      return true;
    }
    return false;
  }

  shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
    if (this.timeTillNextBulletAllowed <= 0 && this.bullets.length < this.maxBulletsAtATime) {
      this.bullets.push(new Bullet(this.canvas, x, y, velocity, this.bulletColor));
      if (this.soundEnabled) {
        this.shootSound.currentTime = 0;
        this.shootSound.play();
      }
      this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
    }
  }
}
