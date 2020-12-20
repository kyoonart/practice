function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function sum(a, b, c) {
    return a + b + c
}
let de = curry(sum)
console.log((de(1)(2)(3)));


function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function curry(func){
    return  curried(...args)=>{
        if(args.length>=func.length){
            func.apply(this, args);
        }else {
            rerurn (...args2)=>{
                return curried.apply(this, args.concat(args2));
            }
        }
    } 
}