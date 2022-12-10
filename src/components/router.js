import { login } from './login.js';
import { signUp } from './signup.js';

const routes = {
  '/': login,
  '/signup': signUp,
  //   '/wall': wall,
};

export const onNavigate = (pathname, rootDiv) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.appendChild(routes[pathname]());
  return rootDiv;
};

export const component = routes[window.location.pathname];
