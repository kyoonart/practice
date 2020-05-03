function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");

Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
//你不能像常规对象那样，给构造函数添加属性。
//如果你想一次性给所有实例添加特性，你应该使用原型。因此本例中，使用如下方式：
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}