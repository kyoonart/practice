let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};
dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return '未翻译'
        }
    }
})

console.log(dictionary['Hello']); // Hola
console.log(dictionary['Welcome to Proxy']); //);
let user = {};

Reflect.set(user, 'name', 'John');

console.log(user.name); // John