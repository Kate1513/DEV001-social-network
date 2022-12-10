import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { auth } from './firebase.js';
// import { signUp } from '../components/signup.js';

const signUpUser = document.querySelector('.page-2');
// let error = "Se sugiere usar contraseñas de 6 digitos a mas"

signUpUser.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = signUpUser.email.value;
  const password = signUpUser.password.value;
  console.log(email, password);

  try {
    const resultSignUp = await createUserWithEmailAndPassword(auth, email, password);
    console.log(resultSignUp);
  } catch (error) {
    console.log(error);
  }
});
