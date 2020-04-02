// 借用原型链实现继承
function Animal() {
    this.name = 'alex';

}
Animal.prototype.getName = function() {
    return this.name
}

function Dog() {}
// 本质 重写原型对象
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var d1 = new Dog();
// 借用构造函数实现
function Animal(name) {
    this.name = name;
    this.color = ['red', 'blue']

}
Animal.prototype.getName = function() {
    return this.name
}

function Dog(name) {
    Animal.call(this, name)
}
var d1 = new Dog('tom');
// 组合继承 = 原型链+构造函数
function Animal(name) {
    this.name = name;
    this.color = ['red', 'blue']

}
Animal.prototype.getName = function() {
    return this.name
}

function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var d1 = new Dog('tom');
var d2 = new Dog('sexx');
// 寄生组合式继承
function Animal(name) {
    this.name = name;
    this.color = ['red', 'blue']

}
Animal.prototype.getName = function() {
    return this.name
}

function Dog(name) {
    Animal.call(this, name)
}
// 重写原型对象：把父类的共享方法继承下来
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
var d1 = new Dog('tom');
var d2 = new Dog('sexx');