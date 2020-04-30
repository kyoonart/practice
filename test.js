// // let onWatch = (obj, setBind, getLogger) => {
// //     let handler = {
// //         get(target, property, receiver) {
// //             getLogger(target, property)
// //             console.log(receiver, 233);

// //             return Reflect.get(target, property, receiver)
// //         },
// //         set(target, property, value, receiver) {
// //             setBind(value, property)
// //             return Reflect.set(target, property, value)
// //         }
// //     }
// //     return new Proxy(obj, handler)
// // }
// // let obj = { a: 1 }
// // let p = onWatch(
// //     obj,
// //     (v, property) => {
// //         console.log(`监听到属性${property}改变为${v}----`)
// //     },
// //     (target, property) => {
// //         console.log(`'${property}' = ${target[property]}---------`)
// //     }
// // )
// // p.a = 2 // 监听到属性a改变
// // p.a // 'a' = 2
// const  target  =   {};  // 要被代理的原对象// 用于描述代理过程的handler
// const  handler  =   {  
//         get:   function (target,  key,  receiver)  {    
//             console.log(`getting ${key}!`);   
//             console.log(receiver, 22); 
//             return  Reflect.get(target,  key,  receiver);  
//         },
//           set:   function (target,  key,  value,  receiver)  {    
//             console.log(`setting ${key}!`);    
//             return  Reflect.set(target,  key,  value,  receiver);  
//         }
//     }
//     // obj就是一个被新的代理对象
// const  obj  =  new  Proxy(target,  handler);
// obj.a  =  1 
//     // setting a!
// console.log(obj.a) 
//     // getting a!


let a = { a: 1, b: 2 }
let b = { b: 2, a: 1 }
console.log(JSON.stringify(a) == JSON.stringify(b));