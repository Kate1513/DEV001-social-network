// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from './firebase.js';
import { signUpUser } from '../src/lib/authentication.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('signUpUser', () => {
  it('Debería ser una función', () => {
    expect(typeof signUpUser).toBe('function');
  });
  it('Debería ejecutart el metodo createUserWithEmailAndPassword', () => {
    const fnTest = Promise.resolve({ email: 'Kate_1513@hotmail.com', password: 'asdasd' });
    createUserWithEmailAndPassword.mockResolvedValue(fnTest);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
