function loadingBar(num) {
    

    const numOfPourcentageSigns = num / 10
    const numOfRestOfDotsSigns = 10 - numOfPourcentageSigns
    
    const dotSign = "."
    const pourcentegeSign = "%"
    
    const bar = `${pourcentegeSign.repeat(numOfPourcentageSigns)}${dotSign.repeat(numOfRestOfDotsSigns)}`

        if (numOfPourcentageSigns !== 10) {
            console.log(`${num}${pourcentegeSign} [${bar}]`)
            console.log("Still loading...")
        }

        else {
            console.log("100% Complete!")
            console.log("[%%%%%%%%%%]")
        }
    }




loadingBar(100)
