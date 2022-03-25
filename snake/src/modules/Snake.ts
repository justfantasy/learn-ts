export default class Snake {
  head: HTMLElement;

  body: HTMLCollection;

  element: HTMLElement;

  constructor() {
    this.element = document.querySelector('.snake')!;
    this.head = document.querySelector('.snake > div') as HTMLElement;
    this.body = this.element.getElementsByTagName('div');
  }

  get x() {
    return this.head.offsetLeft;
  }

  set x(value) {
    this.offset('x', 'offsetLeft', 'left', value);
  }

  get y() {
    return this.head.offsetTop;
  }

  set y(value) {
    this.offset('y', 'offsetTop', 'top', value);
  }

  offset(type: 'x' | 'y', offsetType: 'offsetLeft' | 'offsetTop', styleType: 'left' | 'top', value: number) {
    // 指定方向坐标一致，无需操作
    if (this[type] === value) {
      return;
    }

    // 超过边界值
    if (value < 0 || value > 290) {
      throw new Error('撞墙啦，Game Over!');
    }

    // 默认偏移量是传进来的值
    let offset = value;

    // 不允许掉头
    if (this.body[1] && (this.body[1] as HTMLElement)[offsetType] === value) {
      offset = value > this[type] ? this[type] - 10 : this[type] + 10;
    }

    // 身体移动
    this.move();

    this.head.style[styleType] = `${offset}px`;

    // 检查碰撞
    this.checkCrash();
  }

  grow() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  move() {
    for (let i = this.body.length - 1; i > 0; i -= 1) {
      const x = (this.body[i - 1] as HTMLElement).offsetLeft;
      const y = (this.body[i - 1] as HTMLElement).offsetTop;

      (this.body[i] as HTMLElement).style.left = `${x}px`;
      (this.body[i] as HTMLElement).style.top = `${y}px`;
    }
  }

  checkCrash() {
    for (let i = 1; i < this.body.length; i += 1) {
      const ele = this.body[i] as HTMLElement;
      if (this.x === ele.offsetLeft && this.y === ele.offsetTop) {
        throw new Error('碰到自己了，Game Over!');
      }
    }
  }
}
