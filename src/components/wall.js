import { logoutUser } from '../lib/authentication.js';
import { wallInfoUser } from '../lib/wall_Info.js';

export const wall = () => {
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
      <section class="wall-posting">   
        <textarea class="input-post" placeholder="Ingrese su texto aqui..." value="" autofocus"></textarea>   
        <section>
          <button type="button" class="create-post">Publicar</button>
        </section>        
        </section>
        <hr>
      <section class="wall-posts">
        <section class="post-header">
          <div class="info-user"> 
            <img class="image-user" src="" alt="Imagen de perfil del usuario">
            <p class="name-user"></p>  
          </div>            
          <img class="options-post" src="images/ellipsis.svg" alt="Opciones de la publicacion (Puntos suspensivos))">
        </section>
        <img class="image-user" src="" alt="Imagen de perfil del usuario">
      </section>
    </main>
    <footer>
      <img class="gear-icon" src="images/gear.svg" alt="Imagen de perfil del usuario">
    </footer>      
    `;
  const nameTitle = wallSection.querySelector('.name-user');
  const logOutButton = wallSection.querySelector('.signOut-icon');

  logOutButton.addEventListener('click', () => {
    logoutUser();
  });
  wallInfoUser(nameTitle);
  return wallSection;
};
