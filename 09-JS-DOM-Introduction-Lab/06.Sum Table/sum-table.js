function sumTable() {
    const elementsToCalculate = document.querySelectorAll("table tbody tr:not(:last-child) td:last-child")
 
    const sumElement = document.querySelector("#sum")

    sumElement.textContent = [...elementsToCalculate]
        .map(el => Number(el.textContent))
        .reduce((sum, num) => sum + num, 0)

}