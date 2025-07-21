function deleteByEmail() {
    const searchStr = document.querySelector('input[name="email"]').value;

    const rowsToSearchIn = document.querySelectorAll("table tbody tr td:nth-child(2)");

    let found = false
    if (searchStr === "") return

    [...rowsToSearchIn].forEach(td => {
        if (td.textContent.includes(searchStr)) {
            td.parentElement.remove()
            document.querySelector("#result").textContent = "Deleted."
            found = true
        }
    })

    if (found === false) {
        document.querySelector("#result").textContent = "Not found."

    }
    document.querySelector('input[name="email"]').value = ""

}
