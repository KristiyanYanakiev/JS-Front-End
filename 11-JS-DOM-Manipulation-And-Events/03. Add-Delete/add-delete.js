    function addItem() {
        const textToRead = document.querySelector("#newItemText").value
        const ulEl = document.querySelector("#items")
    
        if (! textToRead) return
    
        const newli = document.createElement("li")
        newli.textContent = textToRead
        const deleteEl = document.createElement("a")
        deleteEl.textContent = "[Delete]"
        deleteEl.setAttribute("href", "#")
        newli.append(deleteEl)
        ulEl.appendChild(newli)
    
        
        document.querySelector("#newItemText").value = ""

        deleteEl.addEventListener("click", e => {
            e.target.parentElement.remove()
        })
    
    
    
    }
    