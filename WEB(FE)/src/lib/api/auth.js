import client from './client';

export const login = ({ username, password }) =>
  client.post('/users/login/', { username, password });

export const register = ({ username, password, passwordConfirm, email }) => {
  return client.post('/users/register/', {
    username,
    password,
    password2: passwordConfirm,
    email,
  });
};

export const check = () => {
  console.log('check');
};

export const logout = () => {
  console.log('logout');
};
