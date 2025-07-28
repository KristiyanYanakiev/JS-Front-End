function loadCommits() {
    const username = document.querySelector("#username").value
    const repository = document.querySelector("#repo").value

    fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const newLi = document.createElement("li")
                newLi.textContent = `${element.commit.author.name}: ${element.commit.message}`
                document.querySelector("#commits").append(newLi)
            })
                   
        })
        .catch(error => {
            const newLi = document.createElement("li")
            newLi.textContent = `Error: ${error.status} (Not Found)`
            document.querySelector("#commits").append(newLi)

        }
            ) 
}