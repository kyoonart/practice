const person = {
    name: "Lydia Hallie",
    age: 21,
    *[Symbol.iterator]() {
        for (let key in person) {
            yield* Object.values(person)
        }
    }
}
for (let k of person) {
    console.log(k);
}