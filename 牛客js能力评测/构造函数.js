function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
const member = new Person("Lydia", "Hallie");
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
console.log(member.getFullName());
console.log(Object.prototype.toString.call(Person));

// var a = 43;
// let a = 1;
// console.log(a);

function* generator(i) {
    yield i + 2;
    yield i * 2;
    yield i - 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let person = { name: "Lydia" };
const members = person
person = null;

console.log(members);


function ReverseList(pHead) {
    // write code here
    let pr = null;
    let pc = null;
    while (pHead) {
        pc = pHead.next;
        pHead.next = pr;
        pr = head;
        head = pc
    }
}