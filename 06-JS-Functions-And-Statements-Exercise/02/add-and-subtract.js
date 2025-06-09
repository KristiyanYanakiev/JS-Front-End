function sum(n1, n2, n3) {
    const firstTwoSum = (n1, n2) => n1 + n2
    const subtract = firstTwoSum(n1, n2) - n3

    console.log(subtract)
}

sum(23, 6, 10)