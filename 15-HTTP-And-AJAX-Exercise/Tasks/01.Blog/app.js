function attachEvents() {
    const btnLoadEl = document.querySelector("#btnLoadPosts")
    const selectEl = document.querySelector("#posts")
    const postTitleEl = document.querySelector("#post-title")
    const postBodyEl = document.querySelector("#post-body")
    const commentsEl = document.querySelector("#post-comments")
    

    const baseUrl = "http://localhost:3030/jsonstore/blog"

    btnLoadEl.addEventListener("click", e => {
        selectEl.innerHTML = ""
        fetch(baseUrl + "/" + "posts") 
            .then(response => response.json())
            .then(posts => {
                Object.values(posts).forEach(post => {
                    const newOptionEl = document.createElement("option")
                    newOptionEl.textContent = post.title
                    Object.assign(newOptionEl.dataset, post)
                    selectEl.append(newOptionEl)
                })
        })
        .catch(error => console.error(error))

    })

   document.querySelector("#btnViewPost").addEventListener("click", e => {
    commentsEl.innerHTML = ""
    fetch(baseUrl + "/" + "comments") 
        .then(response => response.json())
        .then(comments => {
            
            selectedPostEl = selectEl.querySelector("option:checked")
            

            postTitleEl.textContent = selectedPostEl.dataset.title
            postBodyEl.textContent = selectedPostEl.dataset.body

            Object.values(comments).forEach(comment => {
                if (comment.postId === selectedPostEl.dataset.id) {
                    const newCommentEl = document.createElement("li")
                    newCommentEl.textContent = comment.text
                    commentsEl.append(newCommentEl)

                }
            })
            
    })
        .catch(error => console.error(error))
   })
    
}

attachEvents();