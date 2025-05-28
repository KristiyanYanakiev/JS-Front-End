function solve(dailyGold) {
    const pricePerOneBitcoin = 11949.16
    const pricePerOneGramOgGold = 67.51

    

    let totalProfit = 0
    let firstBitcoinPurchaseDay = 0
    let totalBitcoinsPurchased = 0

    dailyGold.forEach((el, i) => {

        if ((i + 1) % 3 === 0) el *= 0.7
        let dailyProfitFromGold = el * pricePerOneGramOgGold
        totalProfit += dailyProfitFromGold

        let b = Math.floor(totalProfit / pricePerOneBitcoin)

        if (b && totalBitcoinsPurchased === 0) firstBitcoinPurchaseDay = i + 1
        if (b) totalBitcoinsPurchased += b

        totalProfit -= b * pricePerOneBitcoin
        


    });

    console.log( `Bought bitcoins: ${totalBitcoinsPurchased}`)
    if (totalBitcoinsPurchased) console.log( `Day of the first purchased bitcoin: ${firstBitcoinPurchaseDay}`)
    console.log(`Left money: ${totalProfit.toFixed(2)} lv.`)
}


solve([3124.15, 504.212, 2511.124])

