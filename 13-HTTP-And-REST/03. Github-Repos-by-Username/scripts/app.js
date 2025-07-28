function loadRepos() {
	
	const username = document.querySelector("#username").value
	document.querySelector("#repos").innerHTML = ""

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(response => response.json())
		.then(data => data.forEach(element => {
			const repoName = element.full_name
			const link = element.html_url 
	
			newliEl = document.createElement("li")
			newAEl = document.createElement("a")
			newAEl.textContent = repoName
			newAEl.href = link
			newliEl.append(newAEl)
			
			document.querySelector("#repos").append(newliEl)
		}))
		.catch(error => {newliEl = document.createElement("li")
			newAEl = document.createElement("a")
			newAEl.textContent = error
			newAEl.href = "some link"
			newliEl.append(newAEl)});
		
	
	

}

//  
