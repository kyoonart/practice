const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    // const search = window.location.search.split('?')[1] || '';
    const search = window.location.search.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}
let url='https://www.baidu.com?a=1&vb=2&c=3'
console.log(getQueryString(url));
