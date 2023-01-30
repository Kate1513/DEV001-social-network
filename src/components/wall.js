import { logoutUser, isActiveSession } from '../lib/authentication.js';
import { infoUser, printPost, publishPost } from '../lib/wall_Info.js';

export const wall = () => {
  const dataSessionStorage = window.sessionStorage;

  if (!isActiveSession(dataSessionStorage.length)) {
    return null;
  }

  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = ` 
    <section class="wall-header">
      <figure class="images-header">
        <img class="logo-h" src="images/logo-social-pet-h.png" alt="Imagen del logo Social Pet">
        <img class="signOut-icon" src="images/sign-out.svg" alt="Imagen para salir de la aplicacion">
      </figure>      
    </section>
    <main>
      <section class="profile-user">
        <div class="info-user"> 
          <img class="photo-user" src="" alt="Imagen de perfil del usuario">
          <p class="name-user"></p>  
        </div>
      </section>
      <section class="wall-posting">   
        <textarea class="input-post" placeholder="Ingrese su texto aqui..." autofocus" ></textarea>   
        <section>
          <button type="button" class="create-post">Publicar</button>
        </section>        
        </section>
        <hr>
      <section class="wall-posts">
        <section class="post-header">                      
        </section>
      </section>
    </main>
    <dialog id="modalDelete">
      <h2>Advertencia</h2>
      <p class="msg-delete">¿Quieres eliminar esta publicacion?</p>
      <div class="modalBtns">
        <button class="deleteBtn">Eliminar</button>
        <button class="cancelBtn">Cancelar</button>
      <div>
    </dialog>
    <footer>
      <img class="gear-icon" src="images/gear.svg" alt="Imagen de perfil del usuario">
    </footer>      
    `;
  const nameTitle = wallSection.querySelector('.name-user');
  const userPhoto = wallSection.querySelector('.photo-user');
  const logOutButton = wallSection.querySelector('.signOut-icon');
  const createPostBtn = wallSection.querySelector('.create-post');
  const inputPost = wallSection.querySelector('.input-post');
  const wallPosts = wallSection.querySelector('.wall-posts');
  const deleteBtn = wallSection.querySelector('.deleteBtn');
  const cancelBtn = wallSection.querySelector('.cancelBtn');

  infoUser(dataSessionStorage.getItem('uid'), nameTitle, userPhoto);
  printPost(wallPosts, deleteBtn, cancelBtn);

  createPostBtn.addEventListener('click', () => {
    const contentPost = inputPost.value;
    if (contentPost !== '') {
      publishPost(dataSessionStorage.getItem('uid'), contentPost)
        .catch((error) => {
          document.alert(error);
        });
      printPost(wallPosts);
      inputPost.value = '';
    }
  });

  logOutButton.addEventListener('click', () => {
    logoutUser();
    sessionStorage.clear();
    window.location.reload();
  });

  return wallSection;
};
