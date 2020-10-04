let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
        console.log(this);
    }
};

// setTimeout(user.sayHi, 1000); // Hello, undefined!
let user1 = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user1, 'name');

console.log(JSON.stringify(descriptor, null, 4));
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/