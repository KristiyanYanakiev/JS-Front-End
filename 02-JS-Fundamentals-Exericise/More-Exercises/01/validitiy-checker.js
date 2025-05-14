function solve(x1, y1, x2, y2) {
    function isDistanceValid(a1, b1, a2, b2) {
       let isValid = false
       if (Number.isInteger( Math.sqrt(((a2 - a1) ** 2) + ((b2 - b1)) ** 2) ) ) isValid = true
        
       return isValid
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${(isDistanceValid(x1, x2, 0, 0)) ? 'valid': 'invalid'}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${(isDistanceValid(x2, y2, 0, 0)) ? 'valid': 'invalid'}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${(isDistanceValid(x1, y1, x2, y2)) ? 'valid': 'invalid'}`)
}

solve(2, 1, 1, 1)
