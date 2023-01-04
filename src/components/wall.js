import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export const wall = () => {
  // let data = {};
  // onAuthStateChanged(auth, async (user) => {
  //   if (user) {
  // const loginUser = sessionStorage.getItem('uid');
  // const querySnapUser = getDoc(doc(db, 'Users', loginUser));
  // const userObj = querySnapUser.data();
  // Object.defineProperty(userObj, 'email', { value:loginUser });
  // data = userObj;
  //   }
  // });
  // console.log(data.name);

  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = ` 
    <header class="wall-header">
      <figure class="images-header">
        <img class="logo-h" src="images/logo-social-pet-h.png" alt="Imagen del logo Social Pet">
        <img class="sign-out" src="images/sign-out.svg" alt="Imagen para salir de la aplicacion">
      </figure>      
    </header>
    <main>
      <section class="wall-posting">   
        <textarea class="input-post" placeholder="Ingrese su texto aqui..." value="" autofocus"></textarea>        
      </section>
      <section class="wall-posts">   
           <h1>po</h1>     
      </section>
    </main>
    <footer>
    </footer>      
    `;

  return wallSection;
};
