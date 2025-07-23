document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const sectionsList = document.querySelector('form input[type="text"]').value.split(", ")
   const contentEl = document.querySelector("#content")

   formEl = document.querySelector("#task-input")

   formEl.addEventListener("submit", e => {
      e.preventDefault()
      sectionsList.forEach(section => {
         const pEl = document.createElement("p")
         const divEl = document.createElement("div")
         pEl.textContent = section
         divEl.append(pEl)
         contentEl.append(divEl)
         pEl.setAttribute('style', 'display: none')
         
         divEl.addEventListener("click", e=> {
            pEl.setAttribute('style', 'display: block')
         })
         
       })
   })

   

}