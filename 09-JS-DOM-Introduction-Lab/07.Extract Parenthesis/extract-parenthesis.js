function extract(content) {
    const textToExtractFrom = document.querySelector("#content").textContent
    const pattern = /\(([^)]+)\)/g

    result = [...textToExtractFrom.matchAll(pattern)]

    let output = ""
    
    for (const element of result) {
        output += `${element[1]}; ` 
    }

    return output
}