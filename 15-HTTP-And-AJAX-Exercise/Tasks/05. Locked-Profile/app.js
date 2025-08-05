function lockedProfile() {

    getData(data => {
        Object.values(data).forEach(el => {
            createUserProfile(el.username, el.email, el.age)
        })
    })

    document.querySelector("#main").addEventListener("click", e => {
        if (e.target.nodeName !== "BUTTON") return
        const currentProfile = e.target.closest(".profile")
        const hiddenDiv = currentProfile.querySelector(".hiddenInfo")
        
        const checkedInput = currentProfile.querySelector('input[type="radio"]:checked')
        
        if (! checkedInput) return 

        if (checkedInput.value === "unlock" & e.target.textContent === "Show more") {
            hiddenDiv.querySelectorAll("input").forEach(i => i.style.display = "block")
            hiddenDiv.querySelectorAll("label").forEach(l => l.style.display = "block")
            e.target.textContent = "Hide it"
        }

        else if (checkedInput.value === "unlock" & e.target.textContent === "Hide it"){
            hiddenDiv.querySelectorAll("input").forEach(i => i.style.display = "none")
            hiddenDiv.querySelectorAll("label").forEach(l => l.style.display = "none")
            e.target.textContent = "Show more"
        }

        else {
            Object.assign(e.target, {disabled: true});
        }
    })

   
}



function getData(onSuccess) {
    fetch(" http://localhost:3030/jsonstore/advanced/profiles")
    .then(response => response.json())
    .then(onSuccess)
    .catch(error => console.error(error))

  }

function createUserProfile(username, email, age) {
    const divEl = document.createElement("div")
    Object.assign(divEl, {className: "profile"})

    const imgEl = document.createElement("img")
    Object.assign(imgEl, {
        src: "./iconProfile2.png", 
        className: "userIcon"
    })

    divEl.append(imgEl)

    const labelEl = document.createElement("label")
    Object.assign(labelEl, {textContent: "Lock"})
    divEl.append(labelEl)

    
    const radioEl = document.createElement("input");

    Object.assign(radioEl, {
    type: "radio",
    name: "user1Locked",
    value: "lock",
    checked: true
    });

    divEl.append(radioEl)

    const labelUnclockEl = document.createElement("label")
    Object.assign(labelUnclockEl, {textContent: "Unlock"})
    divEl.append(labelUnclockEl)

    const radioInputEl = document.createElement("input")
    Object.assign(radioInputEl, {
        
        type: "radio",
        name: "user1Locked",
        value: "unlock", 
        

    })
    divEl.append(radioInputEl)

    const brEl = document.createElement("br")
    const hrEl = document.createElement("hr")

    divEl.append(brEl, hrEl)

    const labelUsernmae = document.createElement("label")
    Object.assign(labelUsernmae, {textContent: "Username"})

    divEl.append(labelUsernmae)

    const UserName = document.createElement("input");

    Object.assign(UserName, {
        type: "text",
        name: "user1Username",
        value: username,
        disabled: true,
        readOnly: true
    });

    divEl.append(UserName)

    const hiddenDiv = document.createElement("div")
    Object.assign(hiddenDiv, {className: "hiddenInfo"})

    const hr2El = document.createElement("hr")
    hiddenDiv.append(hr2El)

    const label2El = document.createElement("label");

    Object.assign(label2El, {
    textContent: "Email:",
    });

    hiddenDiv.append(label2El)

    const emailInput = document.createElement("input");

    Object.assign(emailInput, {
    type: "email",
    name: "user1Email",
    value: email,
    readOnly: true,
    disabled: true
    });

    hiddenDiv.append(emailInput)

    hiddenDiv.append(document.createElement("br"))

    const label3El = document.createElement("label");

    Object.assign(label3El, {
    textContent: "Age:",
    });

    hiddenDiv.append(label3El)

    const ageInput = document.createElement("input");

    Object.assign(ageInput, {
    type: "number",
    name: "user1Age",
    value: age,
    disabled: true,
    readOnly: true
    });

    hiddenDiv.append(ageInput)
    divEl.append(hiddenDiv)   

    const buttonShowMore = document.createElement("button")
    Object.assign(buttonShowMore, {textContent: "Show more"})

    divEl.append(buttonShowMore)
    

    document.querySelector("#main").append(divEl)



   
  

  }

document.querySelector(".profile").remove()
 