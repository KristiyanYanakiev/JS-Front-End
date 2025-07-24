document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector("#input").addEventListener("submit", e => {
        e.preventDefault()
        const data = JSON.parse(e.target.querySelector("textarea").value)

        data.forEach(product => {
            const productImage = product["img"]
            const productName = product["name"]
            const productPrice = product["price"]
            const productDecFactor = product["decFactor"]
            const productCheckBoxInput = document.createElement("input")
            productCheckBoxInput.type = "checkbox"
    
            const productTable = document.querySelector("#shop table tbody")
    
            const newTrEl = document.createElement("tr")
    
            const productImageTdEl = document.createElement("td")
            const imgEl = document.createElement("img")
            imgEl.setAttribute("src", productImage)
    
            productImageTdEl.append(imgEl)
            newTrEl.append(productImageTdEl)
    
            const nameTdEl = document.createElement("td")
            const pEl = document.createElement("p")
            pEl.textContent = productName
    
            nameTdEl.append(pEl)
            newTrEl.append(nameTdEl)
    
            const priceTdEl = document.createElement("td")
            const pricePEl = document.createElement("p")
            pricePEl.textContent = productPrice
    
            priceTdEl.append(pricePEl)
            newTrEl.append(priceTdEl)
    
            const decFactTdEl = document.createElement("td")
            const decFactorPEl = document.createElement("p")
            decFactorPEl.textContent = productDecFactor
    
            decFactTdEl.append(decFactorPEl)
            newTrEl.append(decFactTdEl)
    
            const checkboxTdEl = document.createElement("td")
            checkboxTdEl.append(productCheckBoxInput)
            newTrEl.append(checkboxTdEl)
    
            productTable.append(newTrEl)
    
            
        });
        const products = []
        document.querySelector("#shop").addEventListener("submit", e => {
            e.preventDefault()
            const allTrs = e.target.querySelectorAll("tbody tr")
            const markedTr = [...allTrs].filter(row => row.querySelector('input[type="checkbox"]').checked)

            markedTr.forEach(tr => {
                const name = tr.querySelectorAll("td")[1].querySelector("p").textContent;
                const price = Number(tr.querySelectorAll("td")[2].querySelector("p").textContent)
                const decFact = Number(tr.querySelectorAll("td")[3].querySelector("p").textContent)

                products.push({name, price, decFact})
                
            })
            const productNames = products.map(p => p.name)
            const totalPrice = products.reduce((total, product) => total + product.price, 0);
            const averageDecFact = products.reduce((totalDecFact, p) => totalDecFact + p.decFact, 0 ) / products.length
            
            let output = `Bought furniture: ${productNames.join(", ")}\n`
            output += `Total price: ${totalPrice}\n`
            output += `Average decoration factor: ${averageDecFact}`

            document.querySelector("#shop textarea").value = output
            
        })
        
        
    })
}

