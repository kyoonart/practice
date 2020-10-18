function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

// test();

function Foo() {
    return this
}
Foo.getName = function() {
    console.log('1')
}
Foo.prototype.getName = function() {
        console.log('2')
    }
    // new Foo.getName()
    // new Foo().getName()


var obj = {
    key: 1
}

function fn(obj) {
    obj = 2
}
fn(obj)
    // console.log(obj);

// function foo() {
//     // console.log(a);
//     // a = 1;
// }

// foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???


console.log(foo);

function foo() {
    console.log("foo");
}

var foo = 1;