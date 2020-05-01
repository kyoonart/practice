function foo() {
    let a = 1

    function bar() {
        let a = 2

        function baz() {
            let a = 3;
            console.log(a);
        }
        baz();
    }
    bar();
}
foo();