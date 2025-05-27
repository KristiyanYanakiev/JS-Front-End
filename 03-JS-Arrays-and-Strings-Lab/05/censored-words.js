function solve(text, word) {
    let res = text.replaceAll(word, "*".repeat(word.length))

   console.log(res)
}



solve('A small sentence with some words', 'small')