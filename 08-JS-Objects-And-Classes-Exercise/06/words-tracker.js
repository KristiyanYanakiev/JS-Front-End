function solve(input) {
    const searchedWords = input.shift().split(" ")
    const textTocheck = input

    const matches = {}

    for (const w of searchedWords) {
        matches[w] = 0
    }

    for (const word of textTocheck) {
        if (matches.hasOwnProperty(word)) {
            matches[word] += 1
        }
    }

    Object.entries(matches)
    .sort((a, b) => b[1] - a[1])
    .forEach(([w, o]) => {
        console.log(`${w} - ${o}`)
    })
}


solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])