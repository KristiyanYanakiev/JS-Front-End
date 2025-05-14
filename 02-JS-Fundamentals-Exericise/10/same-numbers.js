function solve(num) {
    num = num.toString()
    let isSame = true
    let sum = 0
    for (let i = 0; i <= num.length - 1; i++) {
        sum += Number(num[i])
        if (Number(num[i]) != Number(num[i+1]) && i + 1 < num.length) isSame = false
    }

    console.log(isSame)
    console.log(sum)
}

solve(2222222)
solve(1234)
