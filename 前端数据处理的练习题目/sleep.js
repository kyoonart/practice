function sleep(time) {
    return new Promise(reslove => setTimeout(reslove, time));
}

function say(name) {
    console.log(`hello ${name}`);
}

async function task() {
    await sleep(3000);
    say('Chocolate');
    say('Yang');
}

task();