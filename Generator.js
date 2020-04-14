function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

// for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
// }
function* objectEntries(obj) {
    let propKeys = Object.keys(obj)

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
let jane = { first: 'Jane', last: 'Doe' };
for (const iterator of objectEntries(jane)) {
    console.log(iterator);

}