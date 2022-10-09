import client from './client';

export const login = ({ username, password }) =>
  client.post('/rest-auth/login', { username, password });

export const register = ({ username, password1, password2, email }) => {
  console.log(username, password1, password2, email);
  return client.post('/rest-auth/registration', {
    username,
    password1,
    password2,
    email,
  });
};

export const check = () => {
  console.log('check');
};

export const logout = () => client.post('/rest-auth/logout');
