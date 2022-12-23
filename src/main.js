// import './lib/sign_up.js';
import { component } from './components/router.js';
import { app } from './lib/firebase.js';

// import { login } from './components/router';

const rootDiv = document.querySelector('#root');
// Este es el punto de entrada de tu aplicacion

rootDiv.appendChild(component);
