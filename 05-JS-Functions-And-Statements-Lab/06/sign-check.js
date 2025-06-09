// function solve(n1, n2, n3) {

//     res = "Positive"
//     numOfFoundNegatives = 0
//     numArray = new Array(n1, n2, n3)

//     numArray.forEach(element => {
//         if (element < 0) {
//             res = "Negative"
//             numOfFoundNegatives ++
//         }
    
//     });

//     if (numOfFoundNegatives % 2 === 0) res = "Positive"
//     else res = "Negative"

//     console.log(res)
// }


// function solve(n1, n2, n3) {
//     const numArray = new Array(n1, n2, n3)

//     const isPositive = numArray.filter(n => n < 0).length % 2 === 0

//     console.log(isPositive ? "Positive": "Negative")
// }

function solve(n1, n2, n3) {

    const isPositive = [...arguments].filter(n => n < 0).length % 2 === 0

    console.log(isPositive ? "Positive": "Negative")
}

solve( 5,
    12,
   -15)

   console.log();
   