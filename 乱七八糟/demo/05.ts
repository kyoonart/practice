function main() {
  const datas = new Array<Date>();
  datas.push(new Date("2020-10-2"));
  datas.push(new Date("2020-10-5"));
  // datas.push('i am not date')
  const result = datas.reverse();
}
const enum Dirtions {
  Up,
  Down,
  Left,
  Right,
}
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
type Combinable = string | number;
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
}
const calculator = new Calculator();
const result = calculator.add("Semlinker", " Kakuqo");
class Greeter {
  // 静态属性
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");
// 继承
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
sam.move();
//  泛型  泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
// typeof 获取一个变量声明或者对象的类型
interface Person {
  name: string;
  age: number;
}
const sem: Person = { name: "semlinker", age: 30 };
type Sem = typeof sem; // -> Person
function toArray(x: number): Array<number> {
  return [x];
}
type Func = typeof toArray; // -> (x: number) => number[]
// keyof
interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person }; // string | number
// interface Aa {
//   [x: string]: string;
// }
// let a: Aa = ["x"];
type Arrayish = { [n: number]: null };
type A = keyof Arrayish;
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const todo: Todo = {
  id: 1,
  text: "Learn TypeScript keyof",
  done: false,
};
// 泛型约束
function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const id = prop(todo, "id"); // const id: number
const text = prop(todo, "text"); // const text: string
const done = prop(todo, "done"); // const done: boolean
//  in
type Keys = "a" | "b" | "c";

type Obj = {
  [p in Keys]: number;
}; // -> { a: any, b: any, c: any }
function onClick(callback?: () => void) {
  callback!(); // 参数是可选入参，加了这个感叹号!之后，TS编译不报错
}
function createArray<T>(length: number, value: T): Array<T> {
  return new Array<T>(length).fill(value);
}
createArray<number>(7, 7);
let ress = createArray<string>(7, "xx");
