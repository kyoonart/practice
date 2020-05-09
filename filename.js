const extname = (filename) => {
    /* TODO */
    return '.' + filename.split('.')[1];
}
console.log(extname('emoji.png'));