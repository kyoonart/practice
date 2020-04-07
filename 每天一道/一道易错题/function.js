function bark() {
    console.log("Woof!");
}

bark.animal = "dog";
// 函数也是对象 可以自定义添加属性
function getPersonInfo(one, two, three) {
    console.dir(arguments);

    // console.log(one);
    // console.log(two);
    // console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo(`${person} is ${age} years old`);
// [Arguments] {
//   '0': [ '', ' is ', ' years old' ],
//   '1': 'Lydia',
//   '2': 21
// }
// 如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。
// 其余参数获取传递到模板字符串中的表达式的值！