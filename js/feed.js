/* ======================================================================================
                                        Stories 
========================================================================================*/
const storiesData = [
    { user: "paulo", avatar: "https://i.pravatar.cc/100?img=1", seen: false },
    { user: "ana", avatar: "https://i.pravatar.cc/100?img=2", seen: true },
    { user: "joao", avatar: "https://i.pravatar.cc/100?img=3", seen: false },
    { user: "maria", avatar: "https://i.pravatar.cc/100?img=4", seen: true },
    { user: "cleiton", avatar: "https://i.pravatar.cc/100?img=5", seen: false },
    { user: "paulo", avatar: "https://i.pravatar.cc/100?img=6", seen: false },
    { user: "ana", avatar: "https://i.pravatar.cc/100?img=7", seen: true },
    { user: "joao", avatar: "https://i.pravatar.cc/100?img=8", seen: false },
    { user: "maria", avatar: "https://i.pravatar.cc/100?img=9", seen: true },
    { user: "cleiton", avatar: "https://i.pravatar.cc/100?img=10", seen: false }
];

const container = document.getElementById("storiesContainer");

storiesData.forEach(story => {
    const div = document.createElement("div");
    div.classList.add("story");
    div.classList.add(story.seen ? "seen" : "unseen");

    div.innerHTML = ` 
    <img src="${story.avatar}" alt="${story.user}">
    `;

    div.addEventListener("click", () => {
        alert("Abrir stories de " + story.user);
    });

    container.appendChild(div);
});

/* ======================================================================================
                                                    POSTS -  FEED 
========================================================================================*/

const posts = [
    {
        user: { name: "Paulo Fischer", avatar: "https://i.pravatar.cc/50?img=1" },
        content: { type: "image", url: "https://picsum.photos/400/300" },
        caption: "Meu primeiro post", likes: "10" },

    {
        user: { name: "Joana Prado", avatar: "https://i.pravatar.cc/50?img=2"},
        content: { type: "image", url: "https://picsum.photos/400/301"},
        caption: "Outro post sem graça", likes: "199" },
    
    {
        user: { name: "Gabriel Gouveia", avatar: "https://i.pravatar.cc/50?img=3" },
        content: { type: "image", url: "https://picsum.photos/400/302" },
        caption: "Viajando por ai", likes: "10" },

    {
        user: { name: "Jaqueline Jaquiel", avatar: "https://i.pravatar.cc/50?img=4" },
        content: { type: "image", url: "https://picsum.photos/400/303" },
        caption: "Viajando na balada", likes: "10" },

    {
        user: { name: "Gabriel Gabo", avatar: "https://i.pravatar.cc/50?img=5" },
        content: { type: "image", url: "https://picsum.photos/400/304" },
        caption: "Quebrando Tudo", likes: "10" }

    ];

const feed = document.getElementById("feed");

posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <div class="post_header">
        <img src="${post.user.avatar}" class="avatar">
        <span>${post.user.name}</span>
    </div>
    
    <img src="${post.content.url}" class="post_img">

    <div class="post_actions">
        ❤️ ${post.likes}
    </div>

    <div class="post_captions">
        ${post.caption}
    </div>

    <div class="coments">
        
    </div>
    `

    feed.appendChild(div);
});

/* ======================================================================================
                                                    
========================================================================================*/

