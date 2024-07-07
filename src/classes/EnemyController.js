import Enemy from "./Enemy.js";
import { MovingDirection } from "../constants/constants.js";

import enemy1Image from "@/assets/game/enemy1.webp";
import enemy2Image from "@/assets/game/enemy2.webp";
import enemy3Image from "@/assets/game/enemy3.webp";

export default class EnemyController {
  enemyMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];
  enemyRows = [];

  currentDirection = MovingDirection.right;
  xVelocity = 0;
  yVelocity = 0;
  defaultXVelocity = 1;
  defaultYVelocity = 1;
  moveDownTimerDefault = 30;
  moveDownTimer = this.moveDownTimerDefault;
  fireBulletTimerDefault = 100;
  fireBulletTimer = this.fireBulletTimerDefault;

  constructor(canvas, enemyBulletController, playerBulletController) {
    this.canvas = canvas;
    this.enemyBulletController = enemyBulletController;
    this.playerBulletController = playerBulletController;

    this.enemyDeathSound = new Audio(require("@/assets/game/enemy-death.wav").default);
    this.enemyDeathSound.volume = 0.1;

    this.createEnemies();
  }

  draw(ctx) {
    this.decrementMoveDownTimer();
    this.updateVelocityAndDirection();
    this.collisionDetection();
    this.drawEnemies(ctx);
    this.resetMoveDownTimer();
    this.fireBullet();
  }

  collisionDetection() {
    this.enemyRows.forEach(enemyRow => {
      enemyRow.forEach((enemy, index) => {
        if (this.playerBulletController.collideWith(enemy)) {
          this.enemyDeathSound.currentTime = 0;
          this.enemyDeathSound.play();
          enemyRow.splice(index, 1);
        }
      });
    });

    this.enemyRows = this.enemyRows.filter(row => row.length > 0);
  }

  fireBullet() {
    if (--this.fireBulletTimer <= 0) {
      this.fireBulletTimer = this.fireBulletTimerDefault;
      const allEnemies = this.enemyRows.flat();
      if (allEnemies.length > 0) {
        const enemy = allEnemies[Math.floor(Math.random() * allEnemies.length)];
        this.enemyBulletController.shoot(enemy.x + enemy.width / 2, enemy.y, -3);
      }
    }
  }

  resetMoveDownTimer() {
    if (this.moveDownTimer <= 0) {
      this.moveDownTimer = this.moveDownTimerDefault;
    }
  }

  decrementMoveDownTimer() {
    if (this.currentDirection === MovingDirection.downLeft || this.currentDirection === MovingDirection.downRight) {
      this.moveDownTimer--;
    }
  }

  updateVelocityAndDirection() {
    this.enemyRows.forEach(enemyRow => {
      const [firstEnemy] = enemyRow;
      const lastEnemy = enemyRow[enemyRow.length - 1];
      
      if (this.currentDirection === MovingDirection.right) {
        this.xVelocity = this.defaultXVelocity;
        this.yVelocity = 0;
        if (lastEnemy.x + lastEnemy.width >= this.canvas.width) {
          this.currentDirection = MovingDirection.downLeft;
        }
      } else if (this.currentDirection === MovingDirection.left) {
        this.xVelocity = -this.defaultXVelocity;
        this.yVelocity = 0;
        if (firstEnemy.x <= 0) {
          this.currentDirection = MovingDirection.downRight;
        }
      } else {
        if (this.moveDown(this.currentDirection === MovingDirection.downLeft ? MovingDirection.left : MovingDirection.right)) {
          return;
        }
      }
    });
  }

  moveDown(newDirection) {
    this.xVelocity = 0;
    this.yVelocity = this.defaultYVelocity;
    if (this.moveDownTimer <= 0) {
      this.currentDirection = newDirection;
      return true;
    }
    return false;
  }

  drawEnemies(ctx) {
    this.enemyRows.flat().forEach(enemy => {
      enemy.move(this.xVelocity, this.yVelocity);
      enemy.draw(ctx);
    });
  }

  createEnemies() {
    const enemyImages = [null, enemy1Image, enemy2Image, enemy3Image];
    this.enemyMap.forEach((row, rowIndex) => {
      this.enemyRows[rowIndex] = [];
      row.forEach((enemyNumber, enemyIndex) => {
        if (enemyNumber > 0) {
          const enemyImage = enemyImages[enemyNumber];
          this.enemyRows[rowIndex].push(new Enemy(enemyIndex * 50, rowIndex * 35, enemyImage));
        }
      });
    });
  }

  collideWith(sprite) {
    return this.enemyRows.flat().some(enemy => enemy.collideWith(sprite));
  }
}