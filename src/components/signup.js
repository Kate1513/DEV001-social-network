export const signUp = () => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUp-page');
  signUpSection.innerHTML = `
    <article class="hu-2">
        <header>
            <img class="cat-hu2" src="images/cat-hu2.png" alt="Imagen de un gatito">
            <h1>Registrar</h1>
            <button type="button" class="registerGoogle"><img class="icon-Google" src="images/icon-Google.png"
                    alt="Icono de Google" />Registro con Google</button>
            <hr width="100%">
        </header>
        <main>
            <form class="page-2">
                <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" >
                <input type="date" class="dateBorn" name="dateBorn" placeholder="Fecha de nacimiento/adopción">
                <input type="email" class="email" name="email" placeholder="Correo electrónico" >
                <input type="password" class="password" name="password" placeholder="Contraseña" >
                <input type="password" class="passwordVerified" name="passwordVerified"
                    placeholder="Verificar Contraseña" >
                <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href=""
                        class="go-pagePoliticPrivacity">Politica de privacidad</a> y la <a href=""
                        class="go-pagePoliticCookies">Politica de cookies</a></h3>
                <button type="submit" class="acept">Aceptar</button>
            </form>
        </main>
    </article>`;
  const startSesionBtn = document.createElement('button');
  signUpSection.appendChild(startSesionBtn);
  return signUpSection;
};
