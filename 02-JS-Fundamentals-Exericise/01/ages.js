function solve(age) {
    if (0 <= age && age <= 2) console.log("baby")
    if (3 <= age && age <= 13) console.log("child")
    if (14 <= age && age <= 19) console.log("teenager")
    if (20 <= age && age <= 65) console.log("adult")
    if ( age >= 66) console.log("elder")
    
    if (age < 0) console.log("out of bounds")
}

solve(20)
solve(1)
solve(100)
solve(-1)
solve(20)