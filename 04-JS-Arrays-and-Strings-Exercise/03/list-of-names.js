function solve(arrOfNames) {
    arrOfNames
    .sort((a, b) => a.localeCompare(b))
    .forEach((e, i) => {
        console.log(`${i+1}.${e}`)
    });
}

solve(["John", "Bob", "Christina", "Ema"])