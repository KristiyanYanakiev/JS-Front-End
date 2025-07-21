document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailInput = document.querySelector("#email");
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function validateEmailEventHandler(e) {
        if (emailInput.value === "") {
            e.target.classList.remove("error")
            return};
        
        if (! emailPattern.test(emailInput.value)) {
            e.target.classList.add("error")
            
        }
        else { emailInput.classList.remove("error")}

       

    }

    emailInput.addEventListener("change", validateEmailEventHandler)
    
    
    
}
