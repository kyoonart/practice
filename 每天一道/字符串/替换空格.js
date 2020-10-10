var replaceSpace = function(s) {
    let temp = s.split(' ');
    return temp.map((item, index) => index === temp.length - 1 ? item : `${item}%20`).join('');
};