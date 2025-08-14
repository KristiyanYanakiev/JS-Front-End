
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

function findClosest(el, selector) {
    while (el) {
        if (el.matches && el.matches(selector)) return el;
        el = el.parentNode;
    }
    return null;
}

function init() {

    let currentId = ""
   

    const baseUrl = "http://localhost:3030/jsonstore/matches/"
    const loadBtn = document.querySelector("#load-matches")
    const addBtn = document.querySelector("#add-match")
    const editBtn = document.querySelector("#edit-match")

    const matchesList = document.querySelector("#list")

    loadBtn.addEventListener("click", loadHandler)
    addBtn.addEventListener("click", addHandler)
    editBtn.addEventListener("click", editHandler)

    function loadHandler(e) {
        
        matchesList.innerHTML = ""
        getFetch(baseUrl, data => {
            Object.values(data).forEach(createEntry)
        })
    }


    function addHandler(e) {
        const host = document.querySelector("#host").value
        const score = document.querySelector("#score").value
        const guest = document.querySelector("#guest").value

        const newResource = {
            host, 
            score, 
            guest
        }
        document.querySelector("#host").value = ""
        document.querySelector("#score").value = ""
        document.querySelector("#guest").value = ""
        postFetch(baseUrl, newResource, () => {
            loadHandler()
        })
    }

    function editHandler(e) {
        const host = document.querySelector("#host").value
        const score = document.querySelector("#score").value
        const guest = document.querySelector("#guest").value

        newResource = {
            host, 
            score,
            guest
        }

        putFetch(baseUrl, currentId, newResource, () => {
            loadHandler()
        })

        editBtn.disabled = true
        addBtn.disabled = false
    }

    function changeHandler(e) {
        const currentLi = findClosest(e.target, "li")
        currentId = currentLi.dataset._id
        document.querySelector("#host").value = currentLi.dataset.host
        document.querySelector("#score").value = currentLi.dataset.score
        document.querySelector("#guest").value = currentLi.dataset.guest

        editBtn.disabled = false
        addBtn.disabled = true
    }

    function deleteHandler(e) {
        
        const currentLi = findClosest(e.target, "li")
        currentId = currentLi.dataset._id

        deleteFetch(baseUrl, currentId, () => {
            loadHandler()
        })
    }

    function createEntry(resourse) {
        const entryEl = createElement("li", {className: "match", dataset: {host: resourse.host, score: resourse.score, guest: resourse.guest, _id: resourse._id}}, matchesList)
        const divEl = createElement("div", {className: "info"}, entryEl)
        createElement("p", {textContent: resourse.host}, divEl)
        createElement("p", {textContent: resourse.score}, divEl)
        createElement("p", {textContent: resourse.guest}, divEl)
        const btnDiv = createElement("div", {className: "btn-wrapper"}, entryEl)
        createElement("button", {className: "change-btn", textContent: "Change", onclick: changeHandler}, btnDiv)
        createElement("button", {className: "delete-btn", textContent: "Delete", onclick: deleteHandler}, btnDiv)


    }

}

document.addEventListener("DOMContentLoaded", init)
