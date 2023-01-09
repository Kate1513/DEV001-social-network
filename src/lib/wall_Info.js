import { doc, getDoc } from 'firebase/firestore';
import { isActiveSession } from './authentication.js';
import { db } from './firebase.js';

export const wallInfoUser = async (name) => {
  if (!isActiveSession()) {
    return null;
  }
  const uid = sessionStorage.getItem('uid');
  await getDoc(doc(db, 'Users', uid)).then((response) => {
    name.innerText += response.data().name;
  });
  return 'Success';
};
