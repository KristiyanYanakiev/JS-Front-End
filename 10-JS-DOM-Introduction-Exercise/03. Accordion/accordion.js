function toggle() {
    const buttonElement = document.querySelector(".button")
    const contentElement = document.querySelector("#extra")

    if (contentElement.style.display === "block") {

    contentElement.style.display = "none"
    buttonElement.textContent = "More"

    }

    else {
        contentElement.style.display = "block"
        buttonElement.textContent = "Less"
    }

}