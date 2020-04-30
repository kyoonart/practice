function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}
let arr = [1, 0, 3, 10, 6, 4, -5]
console.log(selectSort(arr));