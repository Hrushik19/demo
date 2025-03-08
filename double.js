function doubleAfterEverySecond(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 1000);
    });
}

async function display(params) {
    const a =await doubleAfterEverySecond(100);
    const b =await doubleAfterEverySecond(200);
    const c =await doubleAfterEverySecond(300);

    console.log(a+b+c)
}

display()