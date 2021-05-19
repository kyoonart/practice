let name = "addBusName";
const changeClassName = (className) => {
    return className.split('').map(item => {
        let val = item;
        if (item.charCodeAt() >= 65 && item.charCodeAt() < 97) {
            val = '_' + item.toLowerCase();
        }
        return val;
    }).join('')
}
let res = changeClassName(name);


function fn(name) {
    return name.split('').map(item => {
        if (/[A-Z]/g.test(item)) {
            return '_' + item.toLowerCase()
        } else return item
    }).join('')
}
let ress = fn(name)
console.log('res', ress)