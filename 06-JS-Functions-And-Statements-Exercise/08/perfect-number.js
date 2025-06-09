function isPerfect(num) {
    let properPositiveDivisorsSum = 1

    for (let divisor = 2; divisor < num; divisor ++ ) {
        if (num  % divisor === 0) properPositiveDivisorsSum += divisor
    }

    if (num === properPositiveDivisorsSum) console.log("We have a perfect number!");
    else console.log(" It's not so perfect.")
    
}

isPerfect(6)
isPerfect(28)
isPerfect(1236498)