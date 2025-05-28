function solve(text) {
    
    const pattern = /[A-Z][a-z]*/g
    const res = text.match(pattern)

    console.log(res.join(", "))
}

solve('HoldTheDoor')

