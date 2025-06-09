function numberModification(n) {
    const numArray = (String(n).split("")).map(n => Number(n))

    let average = numArray.reduce((acc, val) => acc + val, 0) / numArray.length

    while (average <= 5) {
        numArray.push(9)
        average = numArray.reduce((acc, val) => acc + val, 0) / numArray.length
    }

    console.log(numArray.join(""))
}

numberModification(101)