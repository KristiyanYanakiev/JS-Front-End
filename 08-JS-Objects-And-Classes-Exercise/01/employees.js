function solve(names) {
    const employees = names.reduce((res, el) => {
        res[el] = el.length
        return res;
    }, {});

    for (const e in employees) {
        console.log(`Name: ${e} -- Personal Number: ${employees[e]}`)
    }
}





solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])