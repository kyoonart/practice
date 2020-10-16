let obj = {
    name: 'muyiy',
    a: undefined,
    b: Symbol('muyiy'),
    c: function() {}
}
console.log(obj);
// {
// 	name: "muyiy", 
// 	a: undefined, 
//  b: Symbol(muyiy), 
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "muyiy"}