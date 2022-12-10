export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
  <article class="hu-1">
    <header>
      <img class="logo-hu1" src="images/logo-huella.png" alt="Logo de la aplicacion"/>
      <h1>PetsPerfect</h1>
      <h2>¡Ingresa y deja tus huellitas!</h2>
    </header>
    <main>
      <form class="page-1">
        <input type="email" class="email" name="email" placeholder="Correo electrónico" required >
        <input type="password" class="password" name="password" placeholder="Contraseña" required >
        <button type= "button" class="startGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Iniciar Sesión con Google</button>
        <h3>¿No tienes una cuenta? <a class="go-pageRegister">Regístrate</a></h3>
        <button type= "submit" class="startSesion">Iniciar Sesión</button>
      </form>      
    </main>
  </article> 
  `;
  // const startSesionBtn = document.createElement('button');
  // startSesionBtn.classList.add('startSesion');
  // loginSection.appendChild(startSesionBtn);
  return loginSection;
};
