// function solve(arr) {
//     let evenSum = 0
//     let oddSum = 0

//     for (let n of arr) {
//         if (n % 2 ==0) {
//             evenSum += n 
//         }

//         else {
//             oddSum += n
//         }
//     }

//     console.log((evenSum - oddSum))
// }

function solve(arr) {
    let eS = 0
    let oS = 0

    arr.forEach(element => {
        if (element % 2 == 0) {
            eS += element
        }
        else {
            oS += element
        }
    });

    console.log(eS - oS)
}

solve([1,2,3,4,5,6])
