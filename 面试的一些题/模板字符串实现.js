let templateStr = "i am {{name}},age {{age}},job {{job}} ";
let data = {
  name: "xbd",
  age: 18,
  job: "CTO",
};

function templateFunc(str, data) {
  let computed = str.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return data[key];
  });
  return computed;
}
console.log(templateFunc(templateStr, data));
("i am xbd,age 18,job CTO ");
//  模板引擎
// 将对象data中的数据渲染至template模板中
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18,
};
render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
  // 模板字符串正则
  const reg = /\{\{(\w+)\}\}/;
  // 判断模板里是否有模板字符串
  while (reg.test(template)) {
    // 查找当前模板里第一个模板字符串的字段，对应正则表达式()中的内容
    const name = reg.exec(template)[1];
    // 将第一个模板字符串渲染
    template = template.replace(reg, data[name]);
  }
  // 如果模板没有模板字符串直接返回
  return template;
}
