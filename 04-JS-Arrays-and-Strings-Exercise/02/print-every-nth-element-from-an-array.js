// function solve(arr, step) {
//     const res = []

//     for (let i = 0; i < arr.length; i += step)
//         res.push(arr[i])

//     return res
// }

function solve(arr, step) {
    const res = []

   arr.forEach((element, index) => {
        if (index % step === 0) res.push(element)
   });

    return res
}



console.log(solve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2))

