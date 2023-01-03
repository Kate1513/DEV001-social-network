// importamos la funcion que vamos a testear
import { signUpUser } from '../src/lib/authentication.js';

describe('signUpUser', () => {
  it('debería ser una función', () => {
    expect(typeof signUpUser).toBe('function');
  });
});
