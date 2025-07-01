function solve() {
   const rowsToSearcheIn = document.querySelectorAll("table.container tbody tr")

   const searchedValue = document.querySelector("#searchField").value.toLowerCase().trim()


   
   if (searchedValue === "") return
   rowsToSearcheIn.forEach(td => {
      
      td.classList.remove("select")
      if (td.textContent.toLowerCase().includes(searchedValue)) {
         td.classList.add("select")
         
      }
   })


}