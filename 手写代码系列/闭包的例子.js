let funCount = () => {
    let count = 0;
    return function() {
        return count++
    }
}
let count = funCount()
count()
count()
console.log(count());