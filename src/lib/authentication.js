import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';
// import { signUp } from '../components/signup.js';

export const signUpUser = (event, email, password) => {
  console.log('perrito');
  event.preventDefault();
  console.log(email, password);

  // try {
  //   const resultSignUp = await createUserWithEmailAndPassword(auth, email, password);
  //   console.log(resultSignUp);
  // } catch (error) {
  //   console.log(error);
  // }
};
