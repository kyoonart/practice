var obj = { a: 10 };
var p = new Proxy(obj, {
    deleteProperty(target, prop) {
        console.log("delete propName ", prop);
        return delete target[prop]; // 严格模式下操作成功必须返回true;否则报错
    },
});
delete p.a;
console.log(obj);
// 运行结果如下：
// 'delete propName a'
// {}
