export const getAuth = jest.fn();

export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve(
  { user: { uid: 'mockUID' } },
));

export const setDoc = jest.fn();

export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve(
  { uid: '123' },
));

export const signOut = jest.fn();
