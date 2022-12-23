import { signUpUser } from "../lib/authentication";

export const signUp = (onNavigate) => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUp-page');
  signUpSection.innerHTML = `
  <section class="signUp-p">
    <figure class="dog-signUp">
      <img class="happy-dogs" src="images/dogs.jpg" alt="Imagen de cachorritos">
    </figure>
  <section class="signUp-info">
      <header>
          <h1>Registrar</h1>
      </header>
      <main>
          <form class="page-2">                
              <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" >
              <input type="date" class="dateBorn" name="dateBorn" placeholder="Fecha de nacimiento/adopción">
              <input type="email" class="email" name="email" placeholder="Correo electrónico" >
              <input type="password" class="password" name="password" placeholder="Contraseña" >
              <input type="password" class="passwordVerified" name="passwordVerified"
                  placeholder="Verificar Contraseña" >
              <button type="submit" class="acept">Aceptar</button>
              <button type="button" class="registerGoogle"><img class="icon-Google" src="images/icon-Google.png"
                  alt="Icono de Google" />Registro con Google</button>
              <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href=""
                      class="go-pagePoliticPrivacity">Politica de privacidad</a> y la <a href=""
                      class="go-pagePoliticCookies">Politica de cookies</a></h3>
          </form>
      </main>
  </section>
</section>`;

  const submit = signUpSection.querySelector('.page-2');
  submit.addEventListener('submit', (event) => {
    const email = submit.email.value;
    const password = submit.password.value;
    signUpUser(event, email, password);
  });

  // const aceptBtn = signUpSection.querySelector('.acept');
  // aceptBtn.addEventListener('click', () => onNavigate('/wall'));
  return signUpSection;
};
