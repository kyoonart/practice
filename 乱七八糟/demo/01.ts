function add({ one, two }: { one: number; two: number }): number {
  return one + two;
}
const three = add({ one: 1, two: 2 });
console.log(three);
type name = "xiaomi" | "kuaishou" | "byteDance" | "tencent";
type myName = {
  [key in name]: string | number;
};
interface Type {
  name: string;
  age: number;
}
type keys = keyof Type;
interface Todo {
  name: string;
  age: number;
  title: string;
  completed: boolean;
  description: string;
}

type TodoPreview = Omit<Todo, keyof Type>;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  description: "",
};
