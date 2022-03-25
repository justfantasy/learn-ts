export default class Panel {
  score = 0;

  level = 1;

  scoreEle: HTMLElement;

  levelEle: HTMLElement;

  maxLevel: number;

  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector('.score')!;
    this.levelEle = document.querySelector('.level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  scoreUp() {
    this.scoreEle.innerHTML = String(this.score += 1);
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    this.levelEle.innerHTML = String(this.level += 1);
  }
}
