function solve(words, sentence) {
    for (let w of words.split(", ")) {
       sentence = sentence.replace("*".repeat(w.length), w)
    }

    return sentence
}


console.log(solve('great, learning',
'softuni is ***** place for ******** new programming languages'))