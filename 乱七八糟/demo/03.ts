let muSum:(x: number, y: number)=>number=function(x: number, y: number):number{
  return x + y;
}

interface Fprops{
  mySum:(x: number, y: number)=>number;
}

function getCacheDate<T>(key:string):T{
  return (window as any).cache[key];
}
interface Cat{
  name:string,
  run():()=>void,
}
const tom=getCacheDate<Cat>('tom')
tom.run();

function createArray<T>(length:number,value:T):Array<T>{
let result :T[]=[];
       for(let i=0; i<length;i++){
       result[i]=value;    
  }
    return result
}
createArray(5,2)
function swap<t,u>(tuple:[t,u]):[u,t]{
  return [tuple[1],tuple[0]];

}
swap([7, 'seven']); // ['seven', 7]

// 泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc;
createArray1 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray1(3, 'x'); // ['x', 'x', 'x']
// 类的类型定义
class GenericNumber<T>{
  baseValue:T;
  add:(x:T, y:T)=>T
}
const myGenericNumber=new GenericNumber<number>()
myGenericNumber.baseValue=1;
myGenericNumber.add=(x,y)=>x+y
// 泛型参数默认类型
function createArray2<T=string>(length: number, value: T):Array<T> {
  let result: T[] = [];
  for(let i =0;i<length;i++){
    result.push(value);
  }
  return result;
}

function main() {
  const datas=new Array<Date>();
  datas.push(new Date('2020-10-2'));
  datas.push(new Date('2020-10-5'));
  // datas.push('i am not date')
  const result=datas.reverse()
}
function identity<T>(arg: T): T {
  return arg;
}
type identityProps='hee'|'ident'
const enum Dirtions{
  Up,
  Down,
  Left,
  Right
}
let dirtions=[Dirtions.Up,Dirtions.Down,Dirtions.Left,Dirtions.Right]
export {}