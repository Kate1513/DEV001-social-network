import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';

// Creacion de usuario
export const signUpUser = async (nickname, birthDate, email, password) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password)
    .then(async (credentials) => {
      const userUID = credentials.user.uid;
      await setDoc(doc(db, 'Users', userUID), {
        name: nickname,
        birth_date: birthDate,
        profilePhoto: 'https://icons8.com/icon/33901/cat-profile',
      });
      return userUID;
    })
    .catch((error) => {
      const errorCode = error.code;
      throw new Error(errorCode);
    });
  return newUser;
};

// Inicio de sesion de usuario: Devuelve false: booleano, true: objecto userCredential.
export const loginUser = async (email, password) => {
  const loggedUser = await signInWithEmailAndPassword(auth, email, password)
    .catch(() => false);
  if (!loggedUser) {
    return false;
  }
  return loggedUser;
};

// Sesion Activa: Input: Información de login, Ouput: Booleano.
export const isActiveSession = (logged) => {
  if (logged) {
    return true;
  }
  return false;
};

// Cierre de sesion de usuario
export const logoutUser = () => {
  signOut(auth);
};
