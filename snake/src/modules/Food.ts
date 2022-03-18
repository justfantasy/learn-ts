export default class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.querySelector('.food')!;
  }

  get x() {
    return this.element.offsetLeft;
  }

  get y() {
    return this.element.offsetTop;
  }
}
