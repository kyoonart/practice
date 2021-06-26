function reOrderArray(array) {
    let right = 0,
        left = 0,
        newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            right++;
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 === 0) {
            newArr[right++] = array[j]
        } else {
            newArr[left++] = array[j]
        }
    }
    return newArr;
}