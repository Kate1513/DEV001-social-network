import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';

// Creacion de usuario
export const signUpUser = async (nickname, birthDate, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)

    .then((newUser) => {
      const user = newUser.user;
      setDoc(doc(db, 'Users', user.uid), {
        name: nickname,
        birth_date: birthDate,
      });
      return 'Succesful';
    })
    .catch((error) => {
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
};

// Inicio de sesion de usuario
export const loginUser = async (email, password) => {
  const userObject = await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const isUser = true;
      return isUser;
    })
    .catch(() => {
      const notUser = false;
      return notUser;
    });
  return userObject;
};

//
