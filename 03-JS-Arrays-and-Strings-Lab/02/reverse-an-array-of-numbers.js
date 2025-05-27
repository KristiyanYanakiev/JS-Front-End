function solve(n, arr) {
    const newArr = []

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }

    console.log(newArr.reverse().join(" "))
}

solve(4, [-1, 20, 99, 5])