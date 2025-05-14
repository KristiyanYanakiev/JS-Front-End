function solve(numAsString) {
    numAsString = numAsString.toString()
    let sumOfDigit = 0

    for (let i = 0; i <= numAsString.length - 1; i++) {
        sumOfDigit += Number(numAsString[i])
    }

    console.log(sumOfDigit)
}

solve(245678)