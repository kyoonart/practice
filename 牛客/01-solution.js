var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(str) {

}
rl.on('line', function(line) {
    console.log(solution(line));
});




function ajax(url) {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = ActiveXObject('MicrosoftXMLHTTP');
    }
    xhr.open('get', url, true);
    xhr.onreadystatechange = function(res) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(res.responseText);
        }
    }
    xhr.send(null)
}