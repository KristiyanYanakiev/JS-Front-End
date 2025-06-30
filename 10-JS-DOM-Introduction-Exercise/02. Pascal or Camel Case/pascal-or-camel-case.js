function solve() {
   const textToConvert = document.querySelector("#text").value
   const namingConvention = document.querySelector("#naming-convention").value
   

   function capitalizeWord(w) {
      return w[0].toUpperCase() + w.slice(1)
   }
   let output = ""
   switch(namingConvention) {
      case "Camel Case": 
        output = textToConvert.toLowerCase().split(" ")
        output = output[0] + output.slice(1).map(capitalizeWord).join("")
        
        break;
      case "Pascal Case":
        output = textToConvert.toLowerCase().split(" ")
        output = output.map(capitalizeWord).join("")

        break;
      default:
        output = "Error!"
   }

   document.querySelector("#result").textContent += output
}