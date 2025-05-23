function solve(text, word) {
    let counter = 0
    for (let w of text.split(" ")) {
        if (w === word) {
            counter ++
        }
    }

    console.log(counter)
}

solve('This is a word and it also is a sentence','is')