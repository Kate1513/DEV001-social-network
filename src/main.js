// import './lib/sign_up.js';
import { component, onNavigate } from './components/router.js';
import { isActiveSession } from './lib/authentication.js';

const rootDiv = document.querySelector('#root');
// Este es el punto de entrada de tu aplicacion

const isLogged = sessionStorage.length;

if (!isActiveSession(isLogged) && window.location.pathname === '/wall') {
  onNavigate('/');
} else {
  rootDiv.appendChild(component);
}
