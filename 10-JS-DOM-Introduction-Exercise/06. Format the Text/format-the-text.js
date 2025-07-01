function solve() {
    const textToFormat = document.querySelector("#input").value
    
    const sentences = textToFormat.split(". ")

    const divElement = document.querySelector("#output")

    const sentencePerParagraph = 3

    const numberOfParagraps = Math.ceil(sentences.length / sentencePerParagraph)

    let output = "";

    for (let i = 0; i < numberOfParagraps; i++) {

      const start = i * sentencePerParagraph;
      const end = start + sentencePerParagraph

      output += "<p>"
      output += sentences.slice(start, end).join(". ")
      output += "</p>"
      

    }

    divElement.innerHTML = output
  }
