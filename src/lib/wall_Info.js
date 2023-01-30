import {
  doc, getDoc, collection, addDoc, serverTimestamp, getDocs, query, orderBy, deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase.js';

export const infoUser = async (uid, name, photo) => {
  await getDoc(doc(db, 'Users', uid)).then((response) => {
    name.innerHTML += response.data().name;
    photo.src = response.data().profilePhoto;
  });
};

export const publishPost = async (userId, postContent) => {
  await addDoc(collection(db, 'Posts'), {
    uid: userId,
    datePost: serverTimestamp(),
    content: postContent,
    picture: '../images/profile-user.png',
  })
    .catch((error) => {
      const errorCode = error.code;
      throw new Error(errorCode);
    });
  return 'Publicado exitosamente';
};

export const printPost = async (wallPosts, deleteBtn, cancelBtn) => {
  while (wallPosts.firstChild) {
    wallPosts.removeChild(wallPosts.firstChild);
  }
  const queryPost = query(collection(db, 'Posts'), orderBy('datePost', 'desc'));
  const querySnapshot = await getDocs(queryPost);
  querySnapshot.forEach(async (post) => {
    const postData = post.data();
    const idPost = post.id;
    const snapshotPostUserData = await getDoc(doc(db, 'Users', postData.uid));
    const postUserData = snapshotPostUserData.data();
    const postHeader = document.createElement('section');

    postHeader.classList.add('post-header');
    postHeader.innerHTML = `
      <div class="info-userPost"> 
        <div class="data-user">
          <img class="photo-user" src="${postUserData.profilePhoto}" alt="Imagen de perfil del usuario">
          <p class="user-post">${postUserData.name}</p>  
        </div>      
        <img class="delete-icon" src="images/trash-icon.png" alt="Opciones de la publicacion (Puntos suspensivos))">
      </div>      
      <h4 class="print-post">${postData.content}</h4>
    `;

    const deleteIcon = postHeader.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => {
      window.modalDelete.showModal();
      deleteBtn.addEventListener('click', async () => {
        await deleteDoc(doc(db, 'Posts', idPost));
        window.location.reload();
      });
      cancelBtn.addEventListener('click', () => {
        window.modalDelete.close();
      });
    });

    wallPosts.appendChild(postHeader);
  });
};
