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

    let currentId = ""
   

    const baseUrl = "http://localhost:3030/jsonstore/appointments/"
    const loadBtn = document.querySelector("#load-appointments")
    const editBtn = document.querySelector("#edit-appointment")
    const addBtn = document.querySelector("#add-appointment")
    const appointmentList = document.querySelector("#appointments-list")
    
    loadBtn.addEventListener("click", loadHandler) 
    addBtn.addEventListener("click", addHandler)
    editBtn.addEventListener("click", editHandler)

    
    function loadHandler(e) {
        
        appointmentList.innerHTML = ""

        editBtn.disabled = true
        getFetch(baseUrl, data => Object.values(data).forEach(createEntry))

    }
    

   
    function addHandler(e) {
        e.preventDefault()
        const model = document.querySelector("#car-model").value
        const service = document.querySelector("#car-service").value
        const date = document.querySelector("#date").value

        const newResource = {model, service, date}

        document.querySelector("#car-model").value = ""
        document.querySelector("#car-service").value = ""
        document.querySelector("#date").value = ""
        
        postFetch(baseUrl, newResource, () => {
            loadHandler()
        } )

        
    }
    
    function changeHandler(e) {
        document.querySelector("#car-model").value = e.target.closest(".appointment").dataset.model
        document.querySelector("#car-service").value = e.target.closest(".appointment").dataset.service
        document.querySelector("#date").value = e.target.closest(".appointment").dataset.date

        currentId = e.target.closest(".appointment").dataset._id
        
        editBtn.disabled = false
        addBtn.disabled = true

    }

    function editHandler(e) {
        const model = document.querySelector("#car-model").value
        const service = document.querySelector("#car-service").value
        const date = document.querySelector("#date").value

        

        const newResource = {model, service, date}

        document.querySelector("#car-model").value = ""
        document.querySelector("#car-service").value = ""
        document.querySelector("#date").value = ""

        putFetch(baseUrl, currentId, newResource, () => {
            loadHandler()
        })

        editBtn.disabled = true
        addBtn.disabled = false
    }
    
    function deleteHandler(e) {
        currentId = e.target.closest(".appointment").dataset._id
        deleteFetch(baseUrl, currentId, () => {
            loadHandler()
        })
    }
    


    function createEntry(resourse) {
        const entryEl = createElement("li", {className: "appointment", dataset: {model: resourse.model, service: resourse.service, date: resourse.date, _id: resourse._id}}, appointmentList)
        createElement("h2", {textContent: resourse.model}, entryEl)
        createElement("h3", {textContent: resourse.date}, entryEl)
        createElement("h3", {textContent: resourse.service}, entryEl)
        const divBtns = createElement("div", {className: "buttons-appointment"}, entryEl)
        createElement("button", {className: "change-btn", textContent: "Change", onclick: changeHandler}, divBtns)
        createElement("button", {className: "delete-btn", textContent: "Done", onclick: deleteHandler}, divBtns)


    }


}


document.addEventListener("DOMContentLoaded", init)