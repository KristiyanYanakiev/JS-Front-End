document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
   document.querySelector("main").addEventListener("click", e => {
        if (e.target.nodeName !== "BUTTON") return

        const currentProfile = e.target.closest(".profile")
        const state = currentProfile.querySelector(".radio-group input:checked").getAttribute("id")

        if (state.includes("Lock")) return

        const hiddenData = currentProfile.querySelector(".hidden-fields")

        if (hiddenData.classList.contains("active")) {
            hiddenData.classList.remove("active")
            e.target.textContent = "Show less"
        }

        else {
            hiddenData.classList.add("active")
            e.target.textContent = "Show more"
        }   

   })

}