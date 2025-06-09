function solve(grade) {

    let res = ''
    if (grade < 3.00) res = (`Fail (${Math.floor(finalGrade(grade))})`)
    
    else if (grade >= 3.00 && grade < 3.50) res = (`Poor (${finalGrade(grade)})`)

    else if (grade >= 3.50 && grade < 4.50) res = (`Good (${finalGrade(grade)})`)

    else if (grade >= 4.50 && grade < 5.50) res = (`Very good (${finalGrade(grade)})`)
    
    else res = (`Excellent (${finalGrade(grade)})`)
    
    
    function finalGrade(finalGrade) {
        if (finalGrade < 3 ) finalGrade = Math.floor(finalGrade)
        else finalGrade = finalGrade.toFixed(2)
    
        return finalGrade
    }

    console.log(res)

   
}



solve(2)
solve(3.33)