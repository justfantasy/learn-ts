export default class Food {
  element: HTMLElement;

  max = 29;

  constructor() {
    this.element = document.querySelector('.food')!;
  }

  get x() {
    return this.element.offsetLeft;
  }

  get y() {
    return this.element.offsetTop;
  }

  change() {
    this.element.style.left = `${this.position()}px`;
    this.element.style.top = `${this.position()}px`;
  }

  position(): number {
    return Math.round(Math.random() * this.max) * 10;
  }
}
