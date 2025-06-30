function solve() {
   const towns = document.querySelectorAll("#towns li")
   let matches = 0
   

   townToSearch = document.querySelector("#searchText").value.toLowerCase()
   if (townToSearch === "") return
   for (const town of towns) {

        town.classList.remove("match");
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
      if (town.textContent.toLowerCase().includes(townToSearch)) {
         town.classList.add("match")
         matches ++
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   document.querySelector("#result").textContent = `${matches} matches found`
}