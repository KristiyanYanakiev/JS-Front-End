window.addEventListener("load", solve);

function solve() {

    function createElement(tag, properties, container) {
        const element = document.createElement(tag)
        Object.keys(properties).forEach(key => {
            if (typeof properties[key] === "object") {
                Object.assign(element[key], properties[key])
            } else {
                element[key] = properties[key]
            }
        })
    
        if (container) container.appendChild(element)
        
        return element;
    }

    function findClosest(el, selector) {
        while (el) {
            if (el.matches && el.matches(selector)) return el;
            el = el.parentNode;
        }
        return null;
    }

    const addBtn = document.querySelector("#add-btn")
    const taskList = document.querySelector("#task-list")
    const doneList = document.querySelector("#done-list")
    
    addBtn.addEventListener("click", submitHandler) 


    function submitHandler(e) {
        e.preventDefault()
        const place = document.querySelector("#place").value
        const action = document.querySelector("#action").value
        const person = document.querySelector("#person").value

        if (!place || !action || !person) return

        const liEl = createElement("li", {className: "clean-task"}, taskList)
        const articleEl = createElement("article", {}, liEl)
        createElement("p", {textContent: `Place:${place}`}, articleEl)
        createElement("p", {textContent: `Action:${action}`}, articleEl)
        createElement("p", {textContent: `Person:${person}`}, articleEl)
        const divEl = createElement("div", {className: "buttons"}, liEl)
        const editBtn = createElement("button", {className: "edit", textContent: "Edit"}, divEl)
        const doneBtn = createElement("button", {className: "done", textContent: "Done"}, divEl)

        editBtn.addEventListener("click", editHandler)
        doneBtn.addEventListener("click", doneHandler)

        document.querySelector("#place").value = ""
        document.querySelector("#action").value = ""
        document.querySelector("#person").value = ""


    }

    function editHandler(e) {

        const currentTask = findClosest(e.target, "li")
        const article = currentTask.querySelector("article")
        const paragraphs = article.querySelectorAll("p")
    
        document.querySelector("#place").value = paragraphs[0].textContent.replace("Place:", "")
        document.querySelector("#action").value = paragraphs[1].textContent.replace("Action:", "")
        document.querySelector("#person").value = paragraphs[2].textContent.replace("Person:", "")

        currentTask.remove()
    }
    
    function doneHandler(e) {
        const currentTask = findClosest(e.target, "li")
        currentTask.querySelector(".edit").remove()
        currentTask.querySelector(".done").remove()
        doneList.appendChild(currentTask)
        currentTask.classList.remove("clean-task")
        const deleteBtn = createElement("button", {className: "delete", textContent: "Delete"}, currentTask)
        deleteBtn.addEventListener("click", deleteHandler)
    }
    
    function deleteHandler(e) {
        currentTask = findClosest(e.target, "li")
        currentTask.remove()
    }
}