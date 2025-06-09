// function solve(n1, n2, op) {
        
//             let res = 0
//             switch (op) {
//                 case "multiply": 
//                     res = n1 * n2
//                     break
//                 case "divide":
//                     res = n1 / n2
//                     break
//                 case "add":
//                     res = n1 + n2
//                     break
//                 case "subtract":
//                     res = n1 - n2
//                     break
//             }
        
    
//     console.log(res)
// }
    

function solve(n1, n2, op) {
    operations = []

    operations["multiply"] = (a, b) => a * b
    operations["divide"] = (a, b) => a / b
    operations["add"] = (a, b) => a + b
    operations["subtract"] = (a, b) => a - b

    console.log(operations[op](n1, n2))
}



solve(2, 5, "multiply")

