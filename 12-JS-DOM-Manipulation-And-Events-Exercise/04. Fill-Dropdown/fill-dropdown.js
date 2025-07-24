document.addEventListener('DOMContentLoaded', solve);

function solve() {

    
   

    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
        const newItemText = document.querySelector("#newItemText").value
        const newItemValue = document.querySelector("#newItemValue").value

        if (newItemText === "" || newItemValue === "") return

        const selectMenueEl = document.querySelector("#menu")
        
        const newOptionEl = document.createElement("option")

        newOptionEl.textContent = newItemText
        newOptionEl.setAttribute("value", newItemValue)

        selectMenueEl.append(newOptionEl)

        e.target.reset()
        e.target.querySelector("#newItemText").focus()


        
    })


    

}