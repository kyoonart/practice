const arr = [2, 5, [7, 8, [2, 3, 1, [3, 9, 8, [2, 8]]]]];
console.log(arr.join(',').split(',').map(item => Number(item)));
console.log(arr.join(','));