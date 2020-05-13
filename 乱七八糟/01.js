var funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push((function() {
        return i
    })())
}
funcs.forEach(function(res) {
    console.log(res);
})