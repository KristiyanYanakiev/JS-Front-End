window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector("#add-btn")
  const inputs = document.querySelectorAll("form.laptop-info input")
  const checkList = document.querySelector("#check-list")
  const laptopList = document.querySelector("#laptops-list")
  const clearBtn = document.querySelector(".btn.clear")
  addBtn.addEventListener("click", addHandler)
  clearBtn.addEventListener("click", clearHandler)

  
  
  
  function addHandler(e) {
    e.preventDefault()
   const [laptopModel, storageSpace, price] = [...inputs].map(i => i.value)
   if (!laptopModel || !storageSpace || !price) return
    
  const liEl = createElement("li", {className: "laptop-item"}, checkList)
  const article = createElement("article", {}, liEl)
  createElement("p", {textContent: laptopModel}, article)
  createElement("p", {textContent: `Memory: ${storageSpace} TB`}, article)
  createElement("p", {textContent: `Price: ${price}$`}, article)
  createElement("button", {className: "btn edit", textContent: "edit", onclick: editHandler}, liEl)
  createElement("button", {className: "btn ok", textContent: "ok", onclick: okHandler}, liEl)
  
  addBtn.disabled = true
  Array.from(inputs).forEach(i => {
    i.value = ""
  })
  }

  function editHandler(e) {
    e.preventDefault()

    document.querySelector("#laptop-model").value = e.target.closest("li").querySelector("article p:nth-of-type(1)").textContent.trim()
    document.querySelector("#storage").value = e.target.closest("li").querySelector("article p:nth-of-type(2)").textContent.replace("Memory: ", "").replace("TB", "").trim()
    document.querySelector("#price").value = e.target.closest("li").querySelector("article p:nth-of-type(3)").textContent.replace("Price: ", "").replace("$", "").trim()
    e.target.closest("li").remove() 
    addBtn.disabled = false
     

  }

  function okHandler(e) {
    e.preventDefault()
    const el = e.target.closest("li")
    el.querySelector(".btn.edit").remove()
    el.querySelector(".btn.ok").remove()
    el.remove()
    laptopList.append(el)
    addBtn.disabled = false
  }

  function clearHandler(e) {
    e.preventDefault()
    window.location.reload()
  }

  function createElement(tag, properties, container) {
    const element = document.createElement(tag)
    Object.keys(properties).forEach(key => {
        if (typeof properties[key] === "object") {
            Object.assign(element[key], properties[key])
        } else {
            element[key] = properties[key]
        }
    })

    if (container) container.append(element)
    
    return element;
}

}