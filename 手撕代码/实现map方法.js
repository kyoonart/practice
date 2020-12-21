function map(arr, callback) {
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return [];
    } else {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(arr[i], i, arr);
        }
        return res;

    }
}