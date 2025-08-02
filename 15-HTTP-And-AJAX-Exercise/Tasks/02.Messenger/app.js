function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";

    document.querySelector("#submit").addEventListener("click", postHTMLhandler);
    document.querySelector("#refresh").addEventListener("click", getHTMLhandler);

    function postHTMLhandler(e) {
        const authorName = document.querySelector('input[name="author"]').value;
        const message = document.querySelector('input[name="content"]').value;

        if (!authorName || !message) return;

        const newObjData = {
            author: authorName,
            content: message
        };

        fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObjData)
        })
        .then(response => response.json())
        .then(result => document.querySelector("#refresh").click())
        .catch(error => console.error(error));
    }

    function getHTMLhandler(e) {
        document.querySelector("#messages").textContent = "";

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(element => {
                    document.querySelector("#messages").textContent += `${element.author}: ${element.content}\n`;
                });
                document.querySelector("#messages").textContent = document.querySelector("#messages").textContent.trimEnd();
            })
            .catch(error => console.error(error));
    }
}

attachEvents();
