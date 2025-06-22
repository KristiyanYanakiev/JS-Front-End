function extractText() {
    
    const liElements = document.querySelectorAll("ul#items li")

    const content = [...liElements].map(li => li.textContent).join("\n")
    document.querySelector("#result").textContent  = content

}