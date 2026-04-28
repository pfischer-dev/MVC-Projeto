/* ======================================================================================
                                        Stories 
========================================================================================*/
const storiesData = [
    { user: "paulo", avatar: "https://i.pravatar.cc/100?img=1", stories: "https://picsum.photos/1080/1920?random=1", seen: false },
    { user: "ana", avatar: "https://i.pravatar.cc/100?img=2", stories: "https://picsum.photos/1080/1920?random=2", seen: true },
    { user: "joao", avatar: "https://i.pravatar.cc/100?img=3", stories: "https://picsum.photos/1080/1920?random=3", seen: false },
    { user: "maria", avatar: "https://i.pravatar.cc/100?img=4", stories: "https://picsum.photos/1080/1920?random=4", seen: true },
    { user: "cleiton", avatar: "https://i.pravatar.cc/100?img=5", stories: "https://picsum.photos/1080/1920?random=5", seen: false },
    { user: "paulo", avatar: "https://i.pravatar.cc/100?img=6", stories: "https://picsum.photos/1080/1920?random=6", seen: false },
    { user: "ana", avatar: "https://i.pravatar.cc/100?img=7", stories: "https://picsum.photos/1080/1920?random=7", seen: true },
    { user: "joao", avatar: "https://i.pravatar.cc/100?img=8", stories: "https://picsum.photos/1080/1920?random=8", seen: false },
    { user: "maria", avatar: "https://i.pravatar.cc/100?img=9", stories: "https://picsum.photos/1080/1920?random=9", seen: true },
    { user: "cleiton", avatar: "https://i.pravatar.cc/100?img=10", stories: "https://picsum.photos/1080/1920?random=10", seen: false }
];

const container = document.getElementById("storiesContainer");
const viewer = document.getElementById("storyViewer");
const img = document.getElementById("storyImg");
let currentStory = 0; /* variavel que guarda qual stories esta */
let isOpening = false;

/* render bolinhas */
storiesData.forEach((story, index) => {
    const div = document.createElement("div");
    div.classList.add("story");
    div.classList.add(story.seen ? "seen" : "unseen");

    div.innerHTML = `<img src="${story.avatar}" alt="${story.user}">`;

    div.addEventListener("click", () => {
        openStory(index);
    });
    container.appendChild(div);
});

/* OPEN STORIES (abrir o stories para 9x16) */
function openStory(index) {
    currentStory = index;
    img.src = storiesData[currentStory].stories;

    viewer.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    isOpening = true;
}

/* AVANÇAR | RECUAR STORIES  */
viewer.addEventListener('click', (e) => {
    if(isOpening) {
        isOpening = false;
        return;
    }
    
    const largura = window.innerWidth;
    const clique = e.clientX;

    if (clique > largura / 2) {
        nextStory();
    }
    else {
        prevStory();
    }
});

/* Funçao AVANÇAR Story */
function nextStory() {
    if(currentStory < storiesData.length - 1) {
        currentStory++;
        img.src = storiesData[currentStory].stories;
        storiesData[currentStory].seen = true;
    }
    else {/* se nao tiver mais stories fecha */
        closeStory();
    }
}

/* FUnçao RECUAR Story */
function prevStory() {
    if (currentStory > 0) {
        currentStory--;
        img.src = storiesData[currentStory].stories;
    }
}

/*  Função FECHAR STORY */
function closeStory() {
    viewer.classList.add("hidden");
    document.body.style.overflow = "auto";

}

/* Fechar story clicando fora da foto */
/* viewer.addEventListener('click', (e) => {
    viewer.classList.add("hidden");
    document.body.style.overflow = "auto";
    
}); */



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
        <div class="post_body">
            <img src="${post.content.url}" class="post_img">
            
            <div class="post_side">
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
            </div>
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