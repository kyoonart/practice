function BigSum(a, b) {
  a = "0" + a;
  b = "0" + b;
  let carry = 0,
    res = [];
  var arrA = a.split("");
  var arrB = b.split("");
  var len = Math.max(arrA.length, arrB.length);
  var distance = arrA.length - arrB.length;
  if (distance > 0) {
    for (var i = 0; i < distance; i++) {
      arrB.unshift("0");
    }
  } else {
    for (var i = 0; i < Math.abs(distance); i++) {
      arrA.unshift("0");
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    let sum = Number(arrA[i]) + Number(arrB[i]) + Number(carry);
    carry = sum >= 10 ? 1 : 0;
    // or carry= Math.floor(sum/10)
    sum = sum > 10 ? parseInt(sum % 10) : sum;
    res.push(sum);
  }
  return res.join("").replace(/^0/, "");
}
// console.log(BigSum('9007199254740998883', '1'))
// console.log(parseInt(13 % 10));
// 已 12345 和 678 为例
// 我们需要先把他们转换为位数相同，不够补零，记住要统一加一位，为了两个最大的位数相加后可能需要进位
// 12345 =>  012345    678 => 000678
// 然后让各自的个位个位相加，十位与十位相加   5 + 8 = 3  （1为进位） 4 + 7 + 1 = 2 （1）

function add(str1, str2) {
  let a = parseInt(str1, 36);
  let b = parseInt(str2, 36);
  console.log((a + b).toString(36));
  return (a + b).toString(36);
}
add("1X", "2B");
// 36进制加法
function addB(str1, str2) {
  //abcdefghijklmnopqrstuvwxyz
  let charts = "0123456789abcdefghijklmnopqrstuvwxyz";
  let a = str1.split("");
  let b = str2.split("");
  let alength = a.length;
  let blength = b.length;
  let mlength = Math.max(alength, blength);
  let inc = 0;
  let res = "";
  for (let i = 0; i < mlength; i++) {
    let ia = charts.indexOf(a[alength - 1 - i]) || 0;
    let ib = charts.indexOf(b[blength - 1 - i]) || 0;
    let sum = ia + ib + inc;
    if (sum >= 36) {
      inc = 1;
    } else {
      inc = 0;
    }
    res = charts.charAt(sum % 36) + res;
    console.log("36res", res);
  }
  if (inc === 1) {
    res = 1 + res;
  }
  console.log(res);
  return res;
}
addB("1x", "2b");

const bigNumAdd = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let curry = 0;
  let distance = arr1.length - arr2.length;
  let res = [];
  let len = Math.max(arr1.length, arr2.length);
  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      arr2.unshift("0");
    }
  } else {
    for (let i = 0; i < Math.abs(distance); i++) {
      arr1.unshift("0");
    }
  }

  for (let i = 0; i < len; i++) {
    let sum = Number(arr1[i]) + Number(arr2[i]) + curry;
    curry = sum > 10 ? 1 : 0;
    sum = sum > 10 ? parseInt(sum % 10) : sum;
    res.push(sum);
  }
  console.log("res", res.join("").replace(/^0/, ""));
};
// console.log(bigNumAdd("090000071992547409900008883", "1"));
