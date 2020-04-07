// console.log(Object.prototype.toString.call(Object));

function color() {
    console.log('green');
    setTimeout(() => {
        console.log('yellow');
        setTimeout(() => {
            console.log('red');
            setTimeout(color, 2000);
        }, 1000)
    }, 3000);
}
// color()

function sleep(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    })
}
async function changeColor(duration, color) {
    document.getElementById("traffic-light").style.background = color;
    await sleep(duration);

}
async function main() {
    while (true) {
        await changeColor(3000, "green");
        await changeColor(1000, "yellow");
        await changeColor(2000, "red");
    }
}
// main()
console.log(3 ** 3);