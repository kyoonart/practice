// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.sort(function(){
//     return Math.random() - 0.5;
// })
// console.log(arr);
// let arr=['a','c','a','v','s','a',1,2,1,3,2,3,'a','c','c','b','d','b','b','d']
// console.log(arr.sort());
obj={
    a:1,
    b:{a:2,
    c:{
        d:2
    }}
}
obj2={
    a:1,
    b:{a:2,
    c:{
        d:2
    }}
}
console.log(JSON.stringify(obj)===JSON.stringify(obj2));
