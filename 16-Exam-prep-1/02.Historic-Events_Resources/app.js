window.addEventListener("load", solve);

function solve() {
  

  const addBtn = document.querySelector("#add-btn")
  

  addBtn.addEventListener("click", submitHandler)

  function submitHandler(e) {
    e.preventDefault()
    const eventName = document.querySelector("#name").value
    const dateOrTime = document.querySelector("#time").value
    const description = document.querySelector("#description").value
    const ultoAddToEl = document.querySelector("#preview-list")

    if (!eventName || !dateOrTime || !description) return
    const newLiEl = document.createElement("li")
    const articleEl = document.createElement("article")
    const pEventEl = document.createElement("p")
    const dateEl = document.createElement("p")
    const descriptionEl = document.createElement("p")
    pEventEl.textContent = eventName
    dateEl.textContent = dateOrTime
    descriptionEl.textContent = description

    articleEl.append(pEventEl, dateEl, descriptionEl)
    newLiEl.append(articleEl)
    ultoAddToEl.append(newLiEl)

    

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.className = "edit-btn"

    const nextBtn = document.createElement("button")
    nextBtn.textContent = "Next"
    nextBtn.className = "next-btn"

    const divBtns = document.createElement("div")
    divBtns.className = "buttons"

    divBtns.append(editBtn, nextBtn)

    newLiEl.append(divBtns)

    document.querySelector("form").reset()
    addBtn.setAttribute("disabled", true)

    editBtn.addEventListener("click", editHandler)

    function editHandler(e) {
      e.preventDefault()
  
      document.querySelector("#name").value = pEventEl.textContent 
      document.querySelector("#time").value = dateEl.textContent 
      document.querySelector("#description").value = descriptionEl.textContent 
  
      ultoAddToEl.innerHTML = ""

      addBtn.removeAttribute("disabled")
      addBtn.addEventListener("click", e => {
        e.preventDefault()
        pEventEl.textContent = document.querySelector("#name").value
        dateEl.textContent = document.querySelector("#time").value
        descriptionEl.textContent = document.querySelector("#description").value

        document.querySelector("form").reset()
      })
    }

    nextBtn.addEventListener("click", e => {
      e.preventDefault()
      const archiveUl = document.querySelector("#archive-list")
      const secondNewLiEl = document.createElement("li")
      const secondArticleEl = document.createElement("article")
      const secondPEventEl = document.createElement("p")
      const secondDateEl = document.createElement("p")
      const secondDescriptionEl = document.createElement("p")
      secondPEventEl.textContent = pEventEl.textContent
      secondDateEl.textContent = dateEl.textContent
      secondDescriptionEl.textContent = descriptionEl.textContent

      secondArticleEl.append(secondPEventEl, secondDateEl, secondDescriptionEl)
      secondNewLiEl.append(secondArticleEl)
      archiveUl.append(secondNewLiEl)

      const archiveBtn = document.createElement("button")
      archiveBtn.className = "archive-btn"
      archiveBtn.textContent = "Archive"

      archiveUl.append(archiveBtn)


      ultoAddToEl.innerHTML = ""

      archiveUl.addEventListener("click", e => {
        e.preventDefault()
        archiveUl.innerHTML = ""
        addBtn.removeAttribute("disabled")

      })


    })


  }

  



}