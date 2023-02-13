// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import {
  signUpUser,
  registerDocUser,
  loginUser,
  isActiveSession,
  logoutUser,
} from '../src/lib/authentication.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('signUpUser', () => {
  it('Debería ser una función', () => {
    expect(typeof signUpUser).toBe('function');
  });
  it('Debería ejecutar el metodo createUserWithEmailAndPassword', () => {
    signUpUser();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('signUpUser Debería devolver un string', async () => {
    const result = await signUpUser('Kate-1513@hotmail.com', '654321');
    expect(typeof result).toBe('string');
  });
  it('Debería devolver el uid creado', async () => {
    const result = await signUpUser('Kate-1513@hotmail.com', '654321');
    expect(result).toBe('mockUID');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('registerDocUser', () => {
  it('Debería ser una función', () => {
    expect(typeof registerDocUser).toBe('function');
  });
  it('Debería llamar setDoc con los paremetros solicitados', async () => {
    const uid = '123';
    const nickname = 'test';
    const birthDate = '2000-01-01';
    await registerDocUser(uid, nickname, birthDate);
    expect(setDoc).toHaveBeenCalled();
  });
});

describe('loginUser', () => {
  it('Debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('Debería ejecutar el metodo signInWithEmailAndPassword', () => {
    loginUser();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Debería devolver el uid del usuario', async () => {
    const result = await loginUser('Kate-1513@hotmail.com', '654321');
    expect(result.uid).toBe('123');
  });
});

describe('isActiveSession ', () => {
  it('Debería ser una función', () => {
    expect(typeof isActiveSession).toBe('function');
  });
  it('Debería devolver booleano si el argumento es verdadero', () => {
    expect(isActiveSession(true)).toBe(true);
  });
  it('Debería devolver booleano si el argumento es falso', () => {
    expect(isActiveSession(false)).toBe(false);
  });
});

describe('logoutUser', () => {
  it('Debería ser una función', () => {
    expect(typeof logoutUser).toBe('function');
  });
  it('Debería ejecutar el metodo signOut', () => {
    logoutUser();
    expect(signOut).toHaveBeenCalled();
  });
});
