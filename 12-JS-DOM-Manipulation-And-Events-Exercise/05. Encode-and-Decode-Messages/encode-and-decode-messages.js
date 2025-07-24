document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector("#encode").addEventListener("submit", encodeAndSendMessage)

    function encodeAndSendMessage(e) {
        e.preventDefault()
        const message = e.target.querySelector("textarea").value
        const codedMessage = message.split("")
        .map(el => el.charCodeAt(0) + 1)
        .map(el => String.fromCharCode(el))
        .join("")

        document.querySelector("#decode textarea").value = codedMessage
        document.querySelector("#encode textarea").value = ""

    }

    document.querySelector("#decode").addEventListener("submit", decodeAndSendMessage)

    function decodeAndSendMessage(e) {
        e.preventDefault()
        const message = e.target.querySelector("textarea").value
        const decodedMessage = message.split("")
        .map(el => el.charCodeAt(0) - 1)
        .map(el => String.fromCharCode(el))
        .join("")

        document.querySelector("#decode textarea").value = decodedMessage
    }


    
}