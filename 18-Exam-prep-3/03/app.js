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
   

    const baseUrl = "http://localhost:3030/jsonstore/workout/"
    const loadWorkoutBtn = document.querySelector("#load-workout")
    const workoutListEl = document.querySelector("#list")
    const addWorkoutBtn = document.querySelector("#add-workout")
    const editWorkoutBtn = document.querySelector("#edit-workout")


    loadWorkoutBtn.addEventListener("click", loadHandler)
    addWorkoutBtn.addEventListener("click", addHandler)

    document.addEventListener("click", e => {
        if (!e.target.classList.contains("change-btn") && !e.target.classList.contains("delete-btn")) return
        if (e.target.classList.contains("change-btn")) {


            document.querySelector("#workout").value = e.target.closest(".container").dataset.workout
            document.querySelector("#location").value = e.target.closest(".container").dataset.location
            document.querySelector("#date").value = e.target.closest(".container").dataset.date

            currentId = e.target.closest(".container").dataset._id

            editWorkoutBtn.disabled = false
            addWorkoutBtn.disabled = true

        } else if (e.target.classList.contains("delete-btn")){

            currentId = e.target.closest(".container").dataset._id
            deleteFetch(baseUrl, currentId, () => {
            loadHandler()
            })
        
        }
    })
    editWorkoutBtn.addEventListener("click", editHandler)
    

    function loadHandler(e) {
        
        workoutListEl.innerHTML = ""

        getFetch(baseUrl, data => {
            Object.values(data).forEach(createEntry)
        })
    }

    function addHandler(e) {
        e.preventDefault()
        const workout = document.querySelector("#workout").value
        const location = document.querySelector("#location").value
        const date = document.querySelector("#date").value

        if (!workout || !location || !date) return 

        const resource = {
            workout,
            location, 
            date
        }

        postFetch(baseUrl, resource, () => {
            loadHandler()
            
        })

            document.querySelector("#workout").value = ""
            document.querySelector("#location").value = ""
            document.querySelector("#date").value = ""
    }

 

    

    function editHandler(e) {
        const workout = document.querySelector("#workout").value
        const location = document.querySelector("#location").value
        const date = document.querySelector("#date").value
        const resource = {
            workout, 
            location, 
            date
        }

        putFetch(baseUrl, currentId, resource, () => {
            loadHandler()
            

        })
        editWorkoutBtn.disabled = true
        addWorkoutBtn.disabled = false
    }

    function createEntry(resourse) {
        const entryEl = createElement("div", {className: "container", dataset: {workout: resourse.workout, location: resourse.location, date: resourse.date, _id: resourse._id}}, workoutListEl)
        createElement("h2", {textContent: resourse.workout}, entryEl)
        createElement("h3", {textContent: resourse.date}, entryEl)
        createElement("h3", {id: "location", textContent: resourse.location}, entryEl)
        const divBtns = createElement("div", {className: "buttons-container"}, entryEl)
        createElement("button", {className: "change-btn", textContent: "Change"}, divBtns)
        createElement("button", {className: "delete-btn", textContent: "Done"}, divBtns)


    }


}


document.addEventListener("DOMContentLoaded", init)