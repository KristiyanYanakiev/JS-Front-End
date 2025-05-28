function solve(arrayofNums) {
    const arrLen = arrayofNums.length
    arrayofNums.sort((a,b) => (a-b))
    res = []

    for (let i = 0; i < arrLen; i ++)
        if (i % 2 === 0) res.push(arrayofNums.shift())
        else res.push(arrayofNums.pop())

    return res
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))