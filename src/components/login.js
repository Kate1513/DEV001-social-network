import { loginUser } from '../lib/authentication.js';

export const login = (onNavigate) => {
  const loginSection = document.createElement('section');

  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
  <section class="login-p">
    <figure class="dog-login">
      <img class="dog-hi" src="images/dog-hi.png" alt="Imagen de un perrito">
    </figure>
    <section class="login-info">
      <header>
        <img class="logo-login" src="images/logo-social-pet.png" alt="Logo de la aplicacion"/>
        <h2 class="title-msg">¡Ingresa al mundo de las mascotas!</h2>
      </header>
      <main>
        <form class="page-1" method="post">
          <input type="email" class="email" name="email" placeholder="Correo electrónico" required >
          <input type="password" class="password" name="password" placeholder="Contraseña" required >
          <button type= "submit" class="startSesion">Iniciar Sesión</button>
          <button type= "button" class="startGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Iniciar Sesión con Google</button>
          <h3>¿No tienes una cuenta? <a href="" class="go-pageRegister">Regístrate</a></h3>        
        </form>      
      </main>
      <dialog id="modalLogin">
        <h2>Advertencia</h2>
        <p class="msg-user">Datos de inicio de sesion incorrectos</p>
        <div class="modalBtn"> 
        <button class="closeBtn" onclick="window.modalLogin.close();">Aceptar</button>
        </div> 
      </dialog>
    </section>
  </section> 
  `;

  const submit = loginSection.querySelector('.page-1');
  submit.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = submit.email.value;
    const password = submit.password.value;
    loginUser(email, password).then((response) => {
      if (response) {
        sessionStorage.setItem('uid', response.user.uid);
        return window.location.assign('/wall');
      }
      return window.modalLogin.showModal();
    });
  });

  const signUpBtn = loginSection.querySelector('.go-pageRegister');
  signUpBtn.addEventListener('click', () => onNavigate('/signup'));

  return loginSection;
};
