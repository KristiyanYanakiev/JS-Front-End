function solve(text) {
    let words = text.match(/\b[a-zA-Z]+\b/g)
    let upperWords = words.map(word => word.toUpperCase())
    console.log(upperWords.join(", "))
}

