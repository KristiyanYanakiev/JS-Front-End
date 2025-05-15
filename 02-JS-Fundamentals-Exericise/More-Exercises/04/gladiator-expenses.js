function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total_expenses = 0;
    let shielBrokeCounter = 0

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0) total_expenses += helmetPrice
        if (i % 3 === 0) total_expenses += swordPrice

        if ((i % 2 === 0) && (i % 3 === 0)) {
            total_expenses += shieldPrice
            shielBrokeCounter ++
            
            if ((shielBrokeCounter % 2 === 0) && (shielBrokeCounter > 0)) {
                total_expenses += armorPrice
            }
        
        }



    }
   
    console.log(`Gladiator expenses: ${total_expenses.toFixed(2)} aureus`)
}


solve(7, 2, 3, 4, 5)