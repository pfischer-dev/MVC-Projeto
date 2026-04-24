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
        id: 1,
        user: { name: "Paulo Fischer", avatar: "https://i.pravatar.cc/50?img=1" },
        content: { type: "image", url: "https://picsum.photos/400/300" },
        caption: "Meu primeiro post", likes: 10,
        comments: [
            {user: "Joana Prado", text: "Braboooo! Muito bom!"},
            {user: "Paulo Fischer", text: "Olha q legal. Demais"}
        ]},

    {
        id: 2,
        user: { name: "joana prado", avatar: "https://i.pravatar.cc/50?img=2"},
        content: { type: "image", url: "https://picsum.photos/400/301"},
        caption: "Outro post sem graça", likes: 199,
        comments: []},
    
    {
        id: 3,
        user: { name: "gabriel gouveia", avatar: "https://i.pravatar.cc/50?img=3" },
        content: { type: "image", url: "https://picsum.photos/400/302" },
        caption: "Viajando por ai", likes: 10,
        comments: [] },

    {
        id: 4,
        user: { name: "jaqueline jaquiel", avatar: "https://i.pravatar.cc/50?img=4" },
        content: { type: "image", url: "https://picsum.photos/400/303" },
        caption: "Viajando na balada", likes: 10,
        comments: [] },

    {
        id: 5,
        user: { name: "gabriel gabo", avatar: "https://i.pravatar.cc/50?img=5" },
        content: { type: "image", url: "https://picsum.photos/400/304" },
        caption: "Quebrando Tudo", likes: 10,
        comments: []}

    ];

const feed = document.getElementById("feed");

/* ======================================================================================
                                    renderPosts()                
========================================================================================*/
function renderPosts() {
    feed.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post");
        
        div.innerHTML = `
        <div class="post_header">
            <div class="post_header-left">
                <img src="${post.user.avatar}" class="avatar">
                <span>${post.user.name}</span>            
            </div>
            <div class="moreIcon"></div>
        </div>
        
        <img src="${post.content.url}" class="post_img">
        
        <div class="post_actions">
            ❤️ ${post.likes}
        </div>

        <div class="post_captions">
            ${post.caption}
        </div>
    
        <div class="comments">
            ${post.comments.map(c => `
                <p><strong>${c.user}</strong> ${c.text}</p>
                `).join("")}
        </div>
        <div class="input_submit">
            <input class="comment_input" type="text" placeholder="Comentar..." id="input-${post.id}">
            <button onclick="enviarComment(${post.id})">Enviar</button>   
        </div>
        
    
        
        `
    
        feed.appendChild(div);
    });
}

/* ======================================================================================
                                    ADD Comment()                
========================================================================================*/
function addComment(postId, text) {
    const post = posts.find(p => p.id === postId);

    if(!post) return;

    post.comments.push(
        {user: "usuario atual", text: text}
    );
    renderPosts();    

}

/* ======================================================================================
                                    BOTAO enviarComment()                
========================================================================================*/

function enviarComment(postId) {
    const input = document.getElementById(`input-${postId}`);
    const text = input.value;

    if (!text.trim()) return;

    addComment(postId, text);
}

/* ======================================================================================
                                        INIT
========================================================================================*/

renderPosts();