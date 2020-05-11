class A {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return `I am ${this.name}.`
    }
}

class B {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return `This is ${this.name}.`
    }
}


const a = new A('Jerry')
const b = new B('Lucy')

a.sayHi() // => 'I am Jerry.'
b.sayHi() // => 'This is Lucy.'

a instanceof B // => false
b instanceof A // => false
const exchange = (a, b) => /* TODO */ {
    const aProto = Object.getPrototypeOf(a);
    const bProto = Object.getPrototypeOf(b);
    Object.setPrototypeOf(a, bProto)
    Object.setPrototypeOf(b, aProto)
}