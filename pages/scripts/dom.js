import { constroladorPost } from "./post";

export const controleDOM = {
    addPosts: (posts) => {
      let ultimoPost;
      posts.map(async (post) => {
        const postElement = criarPost(post);
        document.getElementById("posts").appendChild(postElement);
        ultimoPost = postElement;
      });
      return ultimoPost;
    },
  };

    const criarPost = (post) => {
    const postDiv = document.createElement("div");
    postDiv.id = `post-${post.id}`;
    postDiv.classList = "post";
  
    const postBtn = document.createElement("button");
    postBtn.addEventListener("click", () => updatePostModal(post));
  
    const postTitle = document.createElement("h4");
    postTitle.classList = "post-title";
    postTitle.textContent = post.title;
    postBtn.appendChild(postTitle);
    postDiv.appendChild(postBtn);
  
    const postBody = document.createElement("p");
    postBody.classList = "post-body";
    postBody.textContent = post.body;
    postDiv.appendChild(postBody);
  
    const postUser = document.createElement("span");
    postUser.classList = "post-user";
    postUser.textContent = post.userId;
    postDiv.appendChild(postUser);
  
    return postDiv;
  };