function solve(w, t) {
    if (t.toLowerCase().split(" ").includes(w)) console.log(w)
    else console.log(`${w} not found!`)
}

solve('javascript', 'JavaScript is the best programming language')
solve('python',
'JavaScript is the best programming language')