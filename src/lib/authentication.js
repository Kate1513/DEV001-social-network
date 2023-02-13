import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';

// Creacion de usuario en Auth Firebase.
export const signUpUser = (email, password) => {
  const uid = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      const errorCode = error.code;
      throw new Error(errorCode);
    });
  return uid;
};

// Creacion del documento de usuario en Firestore.
export const registerDocUser = async (uid, nickname, birthDate) => {
  await setDoc(doc(db, 'Users', uid), {
    name: nickname,
    birth_date: birthDate,
    profilePhoto: '../images/profile-user.png',
  });
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
