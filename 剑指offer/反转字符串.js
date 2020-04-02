function ReverseSentence(str) {
    // write code here
    if (!str) return '';
    return str.split(' ').reverse().join(' ');
}