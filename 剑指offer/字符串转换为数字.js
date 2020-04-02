function StrToInt(str) {
    let res = 0,
        flag = 0;
    str = str.split('')
    const n = str.length;
    if (!n) return 0;
    if (str[0] === '-') flag = -1;
    for (let i = str[0] === '-' || str[0] === '+' ? 1 : 0; i < str.length; i++) {
        if (!(str[i] >= '0') && str[i] <= '9') return 0;
        res = (res << 1) + (res << 3) + (str[i] - '0') // res*10+(str[i] - '0')
    }
    return res * flag;
}