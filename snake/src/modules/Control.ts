import Snake from './Snake';
import Food from './Food';
import Panel from './Panel';

export default class Control {
  snake: Snake;

  food: Food;

  panel: Panel;

  direction: string = '';

  timerId: number = 0;

  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.food.change();
    this.panel = new Panel();
  }

  start() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  run() {
    let { x, y } = this.snake;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        x += 10;
        break;
      default:
    }

    this.eat(x, y);

    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (e: any) {
      alert(e.message);
      this.isLive = false;
    }

    this.timer();
  }

  timer() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    if (this.isLive) {
      this.timerId = setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30);
    }
  }

  eat(x: number, y: number) {
    if (x === this.food.x && y === this.food.y) {
      this.food.change();
      this.snake.grow();
      this.panel.scoreUp();
    }
  }
}
