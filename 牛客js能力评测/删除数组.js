function removeWithoutCopy(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}