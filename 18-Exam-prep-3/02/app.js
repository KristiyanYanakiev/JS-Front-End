window.addEventListener("load", solve);

function solve() {


    const formEl = document.querySelector("form.registerEvent")
    const nextBtn = document.querySelector("#next-btn")
    const previewList = document.querySelector("#preview-list")
    const eventList = document.querySelector("#event-list")
    
    nextBtn.addEventListener("click", nextHandler)
    previewList.addEventListener("click", editAndApplyHandler)

    function nextHandler(e) {
        e.preventDefault()
        
        const email = document.querySelector("#email").value
        const event = document.querySelector("#event").value
        const location = document.querySelector("#location").value

        if (!email || !event || !location) return

        const liEl = document.createElement("li")
        Object.assign(liEl, {className: "application"})

        const articleEl = document.createElement("article")

        const h4El = document.createElement("h4")
        Object.assign(h4El, {textContent: email})

        const pEl0 = document.createElement("p")

        const strongEl0 = document.createElement("strong")
        Object.assign(strongEl0, {textContent: "Event:"})

        const brEl0 = document.createElement("br")

        const pTextNode0 = document.createTextNode(event)

        const pEl1 = document.createElement("p")

        const strongEl = document.createElement("strong")
        Object.assign(strongEl, {textContent: "Location:"})

        const brEl = document.createElement("br")

        const pTextNode = document.createTextNode(location)


        const editBtn = document.createElement("button")
        Object.assign(editBtn, {className: "action-btn edit", textContent: "edit"})

        const applyBtn = document.createElement("button")
        Object.assign(applyBtn, {className: "action-btn apply", textContent: "apply"})

        pEl0.append(strongEl0, brEl0, pTextNode0)
        pEl1.append(strongEl, brEl, pTextNode)

        Object.assign(pEl0, {className: "eventP"})
        Object.assign(pEl1, {className: "locationP"})
        

        articleEl.append(h4El, pEl0, pEl1)

        liEl.append(articleEl, editBtn, applyBtn)

        previewList.append(liEl)

        nextBtn.disabled = true

        document.querySelector("#email").value = ""
        document.querySelector("#event").value = ""
        document.querySelector("#location").value = ""
      

  
      

    }

    function editAndApplyHandler(e) {
      e.preventDefault()
      if (!e.target.classList.contains("action-btn")) return

      if (e.target.classList.contains("edit")) {
        document.querySelector("#email").value = document.querySelector("h4").textContent

        let eventText = ""
        for (const node of document.querySelector(".eventP").childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                
                eventText = node.textContent
            }
        }
        
        document.querySelector("#event").value = eventText

        let locationText = ""
        for (const node of document.querySelector(".locationP").childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                locationText = node.textContent
            }
        }
        document.querySelector("#location").value = locationText

        previewList.innerHTML = ""
        nextBtn.disabled = false


      } 

      else if (e.target.classList.contains("apply")) {
        const currentTask = document.querySelector("li.application")
        currentTask.querySelector("button.edit").remove()
        currentTask.querySelector("button.apply").remove()
        currentTask.remove()
        eventList.append(currentTask)

        nextBtn.disabled = false

      }
      
    }

    

    }
