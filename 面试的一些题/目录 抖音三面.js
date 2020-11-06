function path(path) {
    let stack = []
    let arr = path.slice(1).split('/')
    let deep = 0
    arr.forEach(item => {
        switch (item) {
            case '..':
                if (deep === 0) {
                    stack.push(item)
                } else {
                    stack.pop()
                }
                break
            case '.':
                break
            default:
                stack.push(item)
                deep++;
                break
        }
    })
    console.log(stack);
    let an = ''
    stack.forEach(item => {
        an += `/${item}`
    })
    console.log(an)
}
path('/a/b/../c/../d');
path('/../../ ');
path('/a/./')