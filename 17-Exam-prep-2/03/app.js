// API code (fetches)

// Utility code (createElement)

// DOM code

function getFetch(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
        
}

function postFetch(baseUrl, resource, onSuccess) {
    fetch(baseUrl, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function putFetch(baseUrl, id, resource, onSuccess) {
    fetch(baseUrl + id , {
        method: "PUT", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function deleteFetch(baseUrl, id, onSuccess) {
    fetch(baseUrl + id , {
        method: "DELETE", 
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
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

function init() {
    const baseUrl = "http://localhost:3030/jsonstore/orders/"
    const loadBtn = document.querySelector("#load-orders")
    const entryContainer = document.querySelector("#list")

    const orderBtn = document.querySelector("#order-btn")
    const editBtn = document.querySelector("#edit-order")

    let currentElementId = ""


    loadBtn.addEventListener("click", loadHandler)
    orderBtn.addEventListener("click", orderHandler)
    editBtn.addEventListener("click", editHandler)

    function loadHandler(e) {
        document.querySelector("#list").innerHTML = ""
        getFetch(baseUrl, data => {
            Object.values(data).forEach(createEntry)
        })

    }

    function orderHandler(e) {
        e.preventDefault()
        if (!document.querySelector("#name").value || !document.querySelector("#quantity").value || !document.querySelector("#date").value) return
        const newObj = {
            name: document.querySelector("#name").value,
            quantity: document.querySelector("#quantity").value,
            date: document.querySelector("#date").value
        }
        
        postFetch(baseUrl, newObj, () => {
            document.querySelector("#name").value = ""
            document.querySelector("#quantity").value = ""
            document.querySelector("#date").value = ""
            loadHandler()
        })
    }

    function editHandler(e) {
        e.preventDefault()

        if (!document.querySelector("#name").value || !document.querySelector("#quantity").value || !document.querySelector("#date").value) return

       const newObj = {
            name: document.querySelector("#name").value, 
            quantity: document.querySelector("#quantity").value,
            date: document.querySelector("#date").value,
           
        }

        putFetch(baseUrl, currentElementId, newObj, () => { 
            
            orderBtn.disabled = false
            editBtn.disabled = true
            document.querySelector("#name").value = ""
            document.querySelector("#quantity").value = ""
            document.querySelector("#date").value = ""
            loadHandler()
            

        })
        
    }


    function createEntry(resourse) {
        const entryEl = createElement("div", {className: "container", dataset: {name: resourse.name, date: resourse.date, quantity: resourse.quantity, _id: resourse._id}}, entryContainer)
        createElement("h2", {textContent: entryEl.dataset.name}, entryEl)
        createElement("h3", {textContent: entryEl.dataset.date}, entryEl)
        createElement("h3", {textContent: entryEl.dataset.quantity}, entryEl)
        createElement("button", {className: "change-btn", textContent: "Change", onclick: changeBtnHandler}, entryEl)
        createElement("button", {className: "done-btn", textContent: "Done", onclick: doneBtnHandler}, entryEl)


    }

    function changeBtnHandler(e) {
        const currentContainer = e.target.closest(".container")

        currentElementId = currentContainer.dataset._id
       
        document.querySelector("#name").value = currentContainer.dataset.name
        document.querySelector("#quantity").value = currentContainer.dataset.quantity
        document.querySelector("#date").value = currentContainer.dataset.date

        orderBtn.disabled = true
        editBtn.disabled = false
        
    }

    function doneBtnHandler(e) {
        e.preventDefault()
        const currentContainer = e.target.closest(".container")
        currentElementId = currentContainer.dataset._id
        deleteFetch(baseUrl, currentElementId, () => {
            loadHandler()
        })


    }
}



document.addEventListener("DOMContentLoaded", init)