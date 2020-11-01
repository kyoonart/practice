
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar(); 1
# bash是采用的动态作用域
value=1
function foo () {
    echo $value;
}
function bar () {
    local value=2;
    foo;
}
bar 2

