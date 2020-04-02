function replaceSpace(str) {
    // :1： // var arr = str.split(' ');
    // var len = arr.length;
    // for (let i = 0; i < len - 1; i++) {
    //     arr[i] = arr[i] + '%20';
    // }
    // return arr.join('');
    //  2：
    return str.replace(/\s/g, '%20')
}
console.log(replaceSpace('We Are Happy'));