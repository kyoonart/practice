function Foo() {
    this.getName = function() {
        console.log(1);
    }
    return this;
}

Foo.getName = function() {
    console.log(2);
}

Foo.prototype.getName = function() {
    console.log(3);
}

var getName = function() {
    console.log(4);
}

function getName() {
    console.log(5);
}
// Foo.getName(); // 2
// getName(); // 4
// Foo().getName();// 1
// getName();// 1
new Foo.getName(); //2
new Foo().getName(); //1
// new new Foo().getName();
new Foo.getName();
// 等价于new(Foo.getName())， 先执行Foo.getName()， 输出2， 再创建Foo.getName() 方法的实例。
// new Foo().getName()
// 相当于(new Foo()).getName()， 先创建Foo的实例， 调用实例的getName() 方法，
// 由于自身没有该方法， 去原型链上找， 它的原型指向构造函数的prototype， 即调用Foo.prototype.getName()， 输出3