
function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook"
    const phoneBookUlEl = document.querySelector("#phonebook")
    const BtnLoadEl = document.querySelector("#btnLoad")
    const BtnCreate = document.querySelector("#btnCreate")

    BtnLoadEl.addEventListener("click", loadEventHandler)
    BtnCreate.addEventListener("click", createEventHandler)

    phoneBookUlEl.addEventListener("click", e => {
        if (e.target.nodeName !== "BUTTON") return
        const key = e.target.closest("li").dataset.key
        deleteEventHandler(key)
        e.target.closest("li").remove()
    })
        
    function loadEventHandler(e) {
        phoneBookUlEl.innerHTML = ""
        GetFetch(data => {
            Object.values(data).forEach(element => {
                
                const person = element.person
                const phone = element.phone
                const liEl = document.createElement("li")
                liEl.textContent = `${person}: ${phone}`
                liEl.dataset.key = element._id
                const delBtnEl = document.createElement("button")
                Object.assign(delBtnEl, {textContent: "Delete"})
                
                liEl.append(delBtnEl)
                phoneBookUlEl.append(liEl)
            }

            )
        })
    }

    

    function createEventHandler(e) {
        if (!document.querySelector("#person").value || !document.querySelector("#phone").value) return
        PostFetch(() => {
            document.querySelector("#person").value = ""
            document.querySelector("#phone").value = ""
            BtnLoadEl.click()
        }) 
        


        }
    
    function deleteEventHandler(key) {
        DeleteFetch(key)
    }
    


    function GetFetch(onSuccess) {
        fetch(baseUrl)
            .then(response => response.json())
            .then(onSuccess)
            .catch(error => console.error(error))

    }

    function PostFetch(onSuccess) {
        fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                person: document.querySelector("#person").value,
                phone: document.querySelector("#phone").value
            })
        }) 
            .then(response => response.json())
            .then(onSuccess)
            .catch(error => console.error(error))
    }

     function DeleteFetch(key, onSuccess) {
        fetch(baseUrl + "/" + key, {
            method: "DELETE"
    
        }) 
            .then(response => response.json())
            .then(onSuccess)
            .catch(error => console.error(error))
     }
}

document.addEventListener('DOMContentLoaded', attachEvents())
