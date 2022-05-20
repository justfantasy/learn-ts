import './style.css';
// import twoSum from './solutions/0001.twoSum';
// import longestPalindrome from './solutions/0005.longestPalindrome';

interface Rabbit {
  name: string;
  age: number;
}

type ReadonlyRabbit<T> = {
  readonly [K in keyof T]: T[K];
}

const rabbit: ReadonlyRabbit<Rabbit> = {
  name: 'Liz',
  age: 6,
};

rabbit.age = 7;
