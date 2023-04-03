import { constroladorPost } from "../scripts/post"
import { controleDOM } from "./dom";

let pagina = 1,
    limite = 20
    elemento;

const carregarPost = async () => {
    const posts = await constroladorPost.pegarPosts(pagina, limite);
    elemento = controleDOM.adicionarPost(posts)
}

carregarPost();