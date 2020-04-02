// var name = 'ConardLi';
// var name2 = name;
// name2 = 'code秘密花园';
// console.log(name); // ConardLi;
// console.log(name2);
// let obj = { name: 'ConardLi' };

// function changeValue(obj) {
//     obj.name = 'code秘密花园';
// }
// changeValue(obj);
// console.log(obj.name); // code秘密花
// let obj = {};

// function changeValue(obj) {
//     obj.name = 'ConardLi';
//     var a = { name: 'code秘密花园' };
//     obj = a;
//     console.log(obj);

// }
// changeValue(obj);
// console.log(obj.name); // ConardLi
// console.log(obj);
// console.log(1 % 1000000007);


function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    if (pHead1 == null || pHead2 == null) return null;
    let p1 = pHead1,
        p2 = pHead2;
    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
        if (p1 != p2) {
            if (p1 == null) p1 = pHead2;
            if (p2 == null) p2 = pHead1
        }
    }
    return p1;
}

function GetNumberOfK(data, k) {
    // write code here
    // if (data.length < 1 || k < 1) return 0;
    // let count = 0;
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i] === k) {
    //         count++;
    //     }
    // }
    // return count;
    console.log(data.join(''));
    console.log(data.join('').split(k));

    return data.join('').split(k).length - 1;
}
let arr = [1, 3, 3, 4, 5, 3, 2, 3, 2, 5, 6, 78, 8]
console.log(GetNumberOfK(arr, 3));