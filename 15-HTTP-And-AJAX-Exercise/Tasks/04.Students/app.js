function attachEvents() {

  const tableEl = document.querySelector("#results tbody")
  const submitBtn = document.querySelector("#submit")

  getData(data => {
    Object.values(data).forEach(student => {
      const firstName = student.firstName
      const lastName = student.lastName 
      const facultyNumber = student.facultyNumber
      const grade = student.grade
      
      const newTrEl = document.createElement("tr")

      const firstNameTdEl = document.createElement("td")
      const lastNameTdEl = document.createElement("td")
      const facultyNumberTdEl = document.createElement("td")
      const gradeTdEl = document.createElement("td")

      firstNameTdEl.textContent = firstName
      lastNameTdEl.textContent = lastName
      facultyNumberTdEl.textContent = facultyNumber
      gradeTdEl.textContent = grade

      newTrEl.append(firstNameTdEl, lastNameTdEl, facultyNumberTdEl, gradeTdEl)
      tableEl.append(newTrEl)
      

    })
  })

  submitBtn.addEventListener("click", e => {
    const inputs = document.querySelectorAll(".inputs input")

    const [newFirstName, newLastName, newFacNum, newGrade] = [...inputs].map(input => input.value)
  
    const newStudent = {
      firstName: newFirstName, 
      lastName: newLastName, 
      facultyNumber: newFacNum, 
      grade: newGrade
  
    }

    createData(newStudent, () => {
      document.querySelectorAll(".inputs input").forEach(e => {
        e.value = ""
      })
    })
    


  })

  
  
  function getData(onSuccess) {
    fetch(" http://localhost:3030/jsonstore/collections/students")
    .then(response => response.json())
    .then(onSuccess)
    .catch(error => console.error(error))

  }

  function createData(student, onSuccess) {
    fetch(" http://localhost:3030/jsonstore/collections/students", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(onSuccess)
    .catch(error => console.error(error))
  }

}

attachEvents();