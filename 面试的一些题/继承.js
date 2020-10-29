function Father(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log('hello')
    }
}

function Son() {
    Father.call(this)
}

inherit(Fa, son) {
    son.prototype = Object.create(Fa.prototype)
    son.prototype.constructor = son
}
Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son
var son = new Son()
console.log(son.sayHi);