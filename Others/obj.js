// let a = Object.create(Object.prototype)
// console.log(a);

function Pet(name, age, hobby) {
    this.name = name; //this作用域：当前对象

    this.age = age;
    this.hobby = hobby;
    this.eat = function() {
        console.log("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
    }
    console.log(this);

}
var maidou = new Pet("麦兜", 25, "coding"); //实例化、创建对象
maidou.eat(); //调用eat方法
console.log(null == undefined);
let obj = {
        a: 'xxx'
    }
    // console.log();
let obj1 = JSON.stringify(obj)
console.log(JSON.parse(obj1));
var isType = function(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
console.log(isType(obj));