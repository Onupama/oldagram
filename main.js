import { posts } from '/data.js'
 
document.addEventListener('click', function(event) {
    if(event.target.dataset.like) {
        incrementLikes(event.target.dataset.like)
    } 
})

document.addEventListener('dblclick', function(event) {
    if(event.target.dataset.post) {
        incrementLikes(event.target.dataset.post)
    }
})

function incrementLikes(postId) {
    const postObj = posts.filter(function(post) {
        return post.uuid === postId
    })[0]

    if(postObj) {
        postObj.likes++
    } 
    document.getElementById(`likes-count-${postId}`).innerText = postObj.likes
}

function createPosts() {
    let postContents = ``
    posts.forEach(post => {
        postContents += `
                    <section class="post">
                        <section class="post-name">
                            <img class="post-avatar" src="${post.avatar}" alt="avatar of ${post.name}">
                            <div>
                                <p class="name">${post.name}</p>
                                <p class="loc">${post.location}</p>
                            </div>
                        </section>
                        <img class="post-img" src="${post.post}" data-post="${post.uuid}" alt="post by ${post.name}">
                        <section class="post-details">
                            <div class="icons">
                                <img class="icon" src="images/icon-heart.png" data-like="${post.uuid}" alt="Heart icon">
                                <img class="icon" src="images/icon-comment.png" alt="Comment icon">
                                <img class="icon" src="images/icon-dm.png" alt="Dm icon">
                            </div>
                            <p class="likes"><span id="likes-count-${post.uuid}">${post.likes}</span> likes</p>
                            <p>
                                <span class="user-name">${post.username}</span>
                                <span class="caption"> ${post.comment}</span>
                            </p>
                        </section> 
                    </section>
                    `
    })
    return postContents
}

function renderPosts() {
    document.getElementById("posts-container").innerHTML = createPosts()
}

renderPosts()

