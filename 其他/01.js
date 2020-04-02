console.log(typeof null);
var num = parseInt("10", 2)
console.log(num);
var a = 2;
console.log(++a + 1);
console.log(--a);
console.log(a);

function setName(obj) {
    obj.name = 'zhangsan';
    obj = new Object()
    obj.name = 'lisi'
    console.log(obj.name);

}
var person = new Object();
setName(person)
console.log(person.name);
console.log(233);