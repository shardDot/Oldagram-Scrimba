const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feed = document.querySelector(".feed")

render(posts)

function render(posts) {
    postsHTML = ""
    for(let i = 0; i < posts.length; i++) {
        postsHTML += `
            <div class="card">
                <div class="card-nav">
                    <img src="src/${posts[i].avatar}" alt="${posts[i].name} avatar" class="user-avatar">
                    <div class="post-info">
                        <p id="poster-name" class="bold">${posts[i].name}</p>
                        <p id="poster-location">${posts[i].location}</p>
                    </div>
                </div>

                <img id="post" src="src/${posts[i].post}" alt="">

                <div class="card-footer">
                    <div class="interact">
                        <img src="src/images/icon-heart.png" alt="">
                        <img src="src/images/icon-comment.png" alt="">
                        <img src="src/images/icon-dm.png" alt="">
                    </div>

                    <p id="likes-amount" class="bold">${posts[i].likes} likes</p>
                    <p id="comments">
                    <strong>${posts[i].username}</strong> ${posts[i].comment}
                    </p>
                </div>
            </div>
        `

        feed.innerHTML = postsHTML
    }
}