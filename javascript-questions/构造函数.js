function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.name = '233'
Person.getFullName = () => this.firstName + this.lastName;

console.log(Person.getFullName());
console.log(Person.name);