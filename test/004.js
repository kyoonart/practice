let arr = [1, 2, 3, 4, 6, 7, 8];

function fn(arr) {
    let res = []
    res.push(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            res.push(arr[i + 1])
        }
    }
    console.log(res);
}
fn(arr);