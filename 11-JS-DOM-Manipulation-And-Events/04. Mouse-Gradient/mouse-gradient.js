function attachGradientEvents() {
    const gradientBoxEl = document.querySelector("#gradient")
    const resultEl = document.querySelector("#result")

    function calcGradient(e) {
        const percent = Math.floor((e.offsetX / e.currentTarget.clientWidth * 100))
        resultEl.textContent = percent + "%"
    }

    gradientBoxEl.addEventListener("mousemove", calcGradient)

    
}
