window.addEventListener("load", solve);

function solve(){
   const eventFormEL = document.querySelector(".event-content")
   const saveBtnEl = document.querySelector("#save")
   const upmcomingUlEl = document.querySelector("#upcoming-list")
   const eventList = document.querySelector("#events-list")

   saveBtnEl.addEventListener("click", e => {
        e.preventDefault()
        const eventName = document.querySelector("#event").value
        const note = document.querySelector("#note").value
        const date = document.querySelector("#date").value

        if (!eventName || !note || !date) return
        createEvent(eventName, note, date, upmcomingUlEl)
        eventFormEL.reset()
        document.querySelector("#event").focus()


   })

   upmcomingUlEl.addEventListener("click", e => {
    if (! e.target.classList.contains("edit") && ! e.target.classList.contains("done")  ) return
    else if (e.target.classList.contains("edit")) {
        e.preventDefault()
        document.querySelector("#event").value = upmcomingUlEl.querySelector("article p:first-child").textContent.replace("Name: ", "")
        document.querySelector("#note").value = upmcomingUlEl.querySelector("article p:nth-child(2)").textContent.replace("Note: ", "")
        document.querySelector("#date").value = upmcomingUlEl.querySelector("article p:nth-child(3)").textContent.replace("Date: ", "")

        upmcomingUlEl.innerHTML = ""
    }

    else if (e.target.classList.contains("done")) {
        e.preventDefault()
        
        const eventItem = upmcomingUlEl.querySelector("li.event-item")
        eventItem.querySelector(".btn.edit").remove();
        eventItem.querySelector(".btn.done").remove();
        eventItem.remove()
        eventList.append(eventItem)
        
    }
   })
  
   document.querySelector("#events").addEventListener("click", e => {
        if (!e.target.classList.contains("delete")) return
        e.preventDefault()
        eventList.innerHTML = ""
   })
   


function createEvent(name, someNote, someDate, ulContainer) {
    const newLi = document.createElement("li")
    Object.assign(newLi, {className: "event-item"})
    const newDiv = document.createElement("div")
    Object.assign(newDiv, {className: "event-container"})
    const newArticle = document.createElement("article")
    const pName = document.createElement("p")
    Object.assign(pName, {textContent: `Name: ${name}`})
    const pNote = document.createElement("p")
    Object.assign(pNote, {textContent: `Note: ${someNote}`})
    const pDate = document.createElement("p")
    Object.assign(pDate, {textContent: `Date: ${someDate}`})

    newArticle.append(pName, pNote, pDate)
    newDiv.append(newArticle)
    newLi.append(newDiv)
    ulContainer.append(newLi)

    const btnsDiv = document.createElement("div")
    Object.assign(btnsDiv, {className: "buttons"})

    const btnEdit = document.createElement("button")
    Object.assign(btnEdit, {className: "btn edit", textContent: "Edit"})

    const btnDone = document.createElement("button")
    Object.assign(btnDone, {className: "btn done", textContent: "Done"})

    btnsDiv.append(btnEdit, btnDone)
    newDiv.append(btnsDiv)

   


}
}

