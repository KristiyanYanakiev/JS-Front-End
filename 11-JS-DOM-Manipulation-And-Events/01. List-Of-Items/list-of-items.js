function addItem() {
    const textToRead = document.querySelector("#newItemText").value
    const ulEl = document.querySelector("#items")

    if (! textToRead) return

    const newli = document.createElement("li")
    newli.textContent = textToRead
    ulEl.appendChild(newli)

    
    document.querySelector("#newItemText").value = ""



}
