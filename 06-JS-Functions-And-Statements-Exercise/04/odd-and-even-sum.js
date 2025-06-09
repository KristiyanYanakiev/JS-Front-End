function oddAndEvenSum(num) {
    const numAsArray = String(num).split("").map(d => Number(d))
    const evenDigits = numAsArray.filter(d => d % 2 === 0)

    function sumArray(arr) {
        return arr.reduce((acc, val) => acc + val, 0)

    }

    const oddDigits = numAsArray.filter(d => d % 2 !== 0)
    
    res = `Odd sum = ${sumArray(oddDigits)}, Even sum = ${sumArray(evenDigits)}`

    console.log(res);
    
}

oddAndEvenSum(1000435)