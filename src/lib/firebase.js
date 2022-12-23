// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpjqJG-kAUCgXXQxEt3Lca65qkkNA9Yi4',
  authDomain: 'fir-social-network-1.firebaseapp.com',
  projectId: 'fir-social-network-1',
  storageBucket: 'fir-social-network-1.appspot.com',
  messagingSenderId: '547260874421',
  appId: '1:547260874421:web:a84e3c137acf81ac6c08fc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log(app);
