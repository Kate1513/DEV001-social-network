import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export const wall = () => {
  let data = {};
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapUser = await getDoc(doc(db, 'Users', user.uid));
      const userObj = querySnapUser.data();
      Object.defineProperty(userObj, 'email', { value: user.email });
      data = userObj;
    }
    console.log(data.name);
  });

  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = ` 
      <section class="wall-p">
        <figure class="dog-login">
          <img class="dog-hi" src="images/dog-hi.png" alt="Imagen de un perrito">
        </figure>      
      </section> 
      <h1>${data.name}</h1>
      `;

  return wallSection;
};
