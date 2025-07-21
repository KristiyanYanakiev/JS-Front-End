document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputs = document.querySelectorAll('section input[type="text"]');
    
    [...inputs].forEach(input => {
        input.addEventListener("focus", e => {
            e.target.parentElement.classList.add("focused")
        })
        input.addEventListener("blur", e => {
            e.target.parentElement.classList.remove("focused")
        })
    });

    
}