import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  const isUser = await signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      sessionStorage.setItem('uid', user.user.uid);
      const validUser = true;
      return validUser;
    })
    .catch(() => {
      const notUser = false;
      return notUser;
    });
  return isUser;
};

// Sesion Activa
export const isActiveSession = (logged) => {
  if (logged) {
    return true;
  }
  return false;
};

// Cierre de sesion de usuario
export const logoutUser = async () => {
  await signOut(auth).then(() => {
    sessionStorage.clear();
    window.location.reload();
  });
};

//
