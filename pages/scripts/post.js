
let postAtual = {};

export const constroladorPost = {
    pegarPosts: async (pagina, limite) => {
        let posts = await fetchPosts(pagina, limite); 
        posts = await atualizacao(posts);
        return posts;
    },
    pegarUsuario: async (id) => await fetchUsuario(id),
    pegarComentarios: async (id) => await fetchComentarios(id),
    modalPost: (id) => postAtual.id === id,
    atualizacaoPost: (post) => (postAtual = { ...post }),
};

async function atualizacao(posts) {
    const usuarios = await Promise.all(
        posts.map(async(post) => await constroladorPost.pegarUsuario(post.usuarioId))
    );
    posts = posts.map((post, idx) => {
        return { ...post, ...usuarios[idx]};
    });
    return posts;    
};

const fetchPosts = (pagina = 1, limite = 20) =>
    fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${limite}`
    )
    .then((res) => res.json())
    .then((res) => res);

const fetchUsuario = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        return { usuarioId: res.name };
      });
  
  const fetchComentarios = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((res) => {
        return { comentarios: res };
      });