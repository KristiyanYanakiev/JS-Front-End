function divideFactorials(num1, num2) {

    function factorial(n) {
        if (n === 1 || n === 0) return 1 
        else return n * factorial(n - 1)
            
    }

    fact1 = factorial(num1)
    fact2 = factorial(num2)

    res = fact1 / fact2 

    console.log(res.toFixed(2))
}

divideFactorials(5, 2)