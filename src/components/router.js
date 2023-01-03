import { login } from './login.js';
import { signUp } from './signup.js';
import { wall } from './wall.js';

const rootDiv = document.querySelector('#root');
let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
  return rootDiv;
};

routes = {
  '/': login(onNavigate),
  '/signup': signUp(onNavigate),
  '/wall': wall(onNavigate),
};

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[window.location.pathname]);
};

export const component = routes[window.location.pathname];
