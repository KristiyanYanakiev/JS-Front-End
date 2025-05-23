function solve(arr) {
    let evenSum = 0
    let oddSum = 0

    for (let n of arr) {
        if (n % 2 ==0) {
            evenSum += n 
        }

        else {
            oddSum += n
        }
    }

    console.log((evenSum - oddSum))
}

solve([1,2,3,4,5,6])
