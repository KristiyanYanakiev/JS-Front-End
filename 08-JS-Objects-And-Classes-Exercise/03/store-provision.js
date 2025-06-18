function solve(stock, orderedProducts) {
    stockObject = {}
    for (let i = 0; i < stock.length; i += 2) {
        stockObject[stock[i]] = Number(stock[i+1])
    }

   for (let i = 0; i  < orderedProducts.length; i += 2) {
    if (! stockObject.hasOwnProperty(orderedProducts[i])) {
        stockObject[orderedProducts[i]] = 0
    }
    stockObject[orderedProducts[i]] += Number(orderedProducts[i + 1])

   }

   Object.entries(stockObject).forEach(([p, q]) => {
        console.log(`${p} -> ${q}`)
   });
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])