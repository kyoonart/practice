function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

function* objectEntries(obj) {
    let propKeys = Object.keys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
let jane = { first: 'Jane', last: 'Doe' };
for (const iterator of objectEntries(jane)) {
    console.log(iterator);
}
for (const key in jane) {
    if (jane.hasOwnProperty(key)) {
        console.log(jane[key]);

    }
}