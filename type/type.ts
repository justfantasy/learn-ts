// number类型
let z: number;
z = 10;

// string类型
let y: string;
y = 'hello';

// boolean类型
let w: boolean;
w = true;

// 字面量类型，可选male或者female
let a: 'male' | 'female';
a = 'male';

let b: 10;
b = 10;

// object类型
let c: object;
c = {};

// 指定对象类型中可以包含的属性
let d: { name: string };
d = { name: '孙悟空' };

// ?:表示属性是可选的
let e: { name: string, age?: number };
e = { name: '孙悟空', age: 18 };

// [propName: string]: any 表示任意类型的属性propName是自定义的一个名称
let f: { name: string, [propName: string]: any };
f = { name: '孙悟空', age: 18, gender: '男', address: '北京' };

// 限制函数结构的类型声明
let g: (a: number, b: number) => number;
g = (a, b) => {
    return a + b;
};

// 数组类型声明的两种方式
let h: string[];
h = ['a', 'b', 'c'];
let i: Array<number>;
i = [1, 2, 3, 4];

// 元组，固定长度的数组
let j: [string, string];
j = ['a', 'b'];

// 枚举类型
enum Gender {
    Male = 0,
    Female = 1,
}

let k: { name: string, gender: Gender };
k = {
    name: '孙悟空',
    gender: Gender.Male,
};

// & 表示同时
let m: { name: string } & { age: number };
m = { name: '孙悟空', age: 19 };

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let n: myType;
n = 1;

