function solve() {
    const tHeadRow = document.querySelector("table thead tr")
    const tbodyRows = document.querySelectorAll("table tbody tr")
    
    
    console.log(tHeadRow.children[0])

    const checkedInputElements = [...tHeadRow.children]
        .map((th, index) => ({el: th.children[0], name: th.children[0].getAttribute("name"), index: index}))
        .filter(object => object.el.checked)

    
    const outputData = [...tbodyRows]
        .map(row => {
            return checkedInputElements.reduce((acc, input) => {
                acc[input.name] = row.children[input.index].textContent
                return acc
            }, {})
        })
    
    const outputEl = document.querySelector("#output")

    outputEl.textContent = JSON.stringify(outputData)
}