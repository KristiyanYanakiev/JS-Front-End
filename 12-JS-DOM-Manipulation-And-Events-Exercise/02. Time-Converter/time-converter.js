document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector("main").addEventListener("submit", e => {
        e.preventDefault()
        
        const valueToConvert = Number(e.target.querySelector("input").value)
        const typeOfValue = e.target.getAttribute("id")

        if (valueToConvert < 1) return

        const values = {
            seconds: 1, 
            minutes: 60, 
            hours: 3600, 
            days: 86400,
        }

        const convertedValueInSeconds = (valueToConvert * values[typeOfValue]).toFixed(2)
        const  convertedValueInMinutes = (convertedValueInSeconds / values["minutes"]).toFixed(2)
        const convertedValueInHours = (convertedValueInSeconds / values["hours"]).toFixed(2)
        const convertedValueInDays = (convertedValueInSeconds / values["days"]).toFixed(2)

        const daysDivEl = document.querySelector("#days input")
        const hoursDivEl = document.querySelector("#hours input")
        const minutesDivEl = document.querySelector("#minutes input")
        const secondsDivEl = document.querySelector("#seconds input")

        daysDivEl.value = convertedValueInDays
        hoursDivEl.value = convertedValueInHours
        minutesDivEl.value = convertedValueInMinutes
        secondsDivEl.value = convertedValueInSeconds
        
       
       
        
    })

    
}


