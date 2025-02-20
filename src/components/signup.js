import { registerDocUser, signUpUser } from '../lib/authentication.js';

export const signUp = () => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUp-page');
  signUpSection.innerHTML = `
  <section class="signUp-p">
    <figure class="dog-signUp">
      <img class="happy-dogs" src="images/dogs.jpg" alt="Imagen de cachorritos">
    </figure>
    <section class="signUp-info">
      <header>
        <h1>Registro</h1>
      </header>
      <main>
        <form class="page-2">                
          <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" required>
          <input type="date" class="birthDate" name="birthDate" placeholder="Fecha de nacimiento/adopción" required>
          <input type="email" class="email" name="email" placeholder="Correo electrónico" required>
          <input type="password" class="password" name="password" placeholder="Contraseña" required>
          <input type="password" class="passwordVerified" name="passwordVerified" placeholder="Verificar Contraseña" required>
          <button type="submit" class="acept">Aceptar</button>
          <button type="button" class="registerGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Registro con Google</button>
          <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href="" class="go-pagePoliticPrivacity">Politica de privacidad</a> y la 
          <a href="" class="go-pagePoliticCookies">Politica de cookies</a></h3>   
        </form>
      </main>
      <dialog id="modalSignup">
        <h2>Advertencia</h2>
          <p class="msg-user">Datos de inicio de sesion incorrectos</p>
        <div class="modalBtn"> 
          <button class="closeBtn" onclick="window.modalSignup".close();">Aceptar</button>
        </div> 
      </dialog>
    </section>
  </section>`;

  const submit = signUpSection.querySelector('.page-2');
  const msgUser = signUpSection.querySelector('.msg-user');

  submit.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = submit.nickname.value;
    const birthDate = submit.birthDate.value;
    const email = submit.email.value;
    const password = submit.password.value;
    signUpUser(email, password)
      .then((uid) => {
        sessionStorage.setItem('uid', uid);
      })
      .then(() => {
        registerDocUser(sessionStorage.uid, name, birthDate)
          .then(() => {
            window.location.assign('/wall');
          });
      })
      .catch((error) => {
        msgUser.innerHTML = error;
        window.modalSignup.showModal();
      });
  });

  return signUpSection;
};
