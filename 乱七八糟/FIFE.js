 class Pe {
     constructor(name) {
         this.name = name;
     }
     sayName() {
         console.log(this.name);
         console.log(this);
     }
 };
 //  let person = new Pe('张三')
 //  person.sayName(); // ""\
 number = 222
 var obj = {
     number: 3,
     w: dd = 99,
     xxx: (function() {
             console.log(this + '-----------') //立即执行函数中的this指向window，因为立即执行函数是window调用的            
             console.log(dd + '^^^^^^^^^^^') // 99
                 //  console.log(number + '***************') // 会报错：number is not defined，后面的代码就不会执行了
             console.log(this.number + '~~~~~~~~~~~') //删除上面一行，此处this.number返回undefined
             this.number += 4; // 值为NaN(undefined+4返回NaN)
             return function() {
                 console.log(this.number + '】】】】】】】】')
                 this.number += 7;
                 console.log(this + '++++++++++++++++++++++')
             }
         })() //立即执行函数
 }
 console.log(obj.xxx);