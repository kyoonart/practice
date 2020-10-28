var firstName = Symbol('first name');
var firstName2 = Symbol('first name');
console.log(firstName);
let person = {
        //使用一个可计算对象字面量属性
        firstName: '欧阳不乖',
        [firstName]: "zhansghan",
        [firstName2]: 'lisi'
    }
    //将属性设置为只读
    // Object.defineProperty(person, firstName, { writable: false });
    // console.log(person[firstName]); //'欧阳不乖'
    // console.log(person.firstName);
    // console.log(firstName in person);
    // console.log(firstName);
    // console.log(person);
    // console.log(Object.getOwnPropertySymbols(person));


let promise = new Promise((resolve, reject) => {
    resolve(1)
})
console.log(promise instanceof Promise);
console.log(promise.then() instanceof Promise);
console.log(typeof promise);