// function Add(num) {
//     this.num = num;
//     this.add = function(val) {
//         this.num = this.num + val;
//         return this
//     }
//     this.minus = function(val) {
//         return this.num - val
//     }
// }

class add {
    constructor(num) {
        this.num = num;
    }
    add = function(val) {
        this.num = this.num + val;
        return this
    }
    minus = function(val) {
        return this.num - val
    }
}
// let r = new add(5)
// let es = r.add(3).minus(3)
// console.log(es)


Number.prototype.add = function(num) {
    return this + num

}


Number.prototype.minus = function(num) {
    return this - num

}

console.log((5).add(3).minus(2))