import client from './client';

export const login = ({ username, password }) =>
  client.post('/rest-auth/login', { username, password });

export const register = async ({ username, password1, password2, email }) => {
  console.log(username, password1, password2, email);
  const response = await client.post('/rest-auth/registration', {
    username,
    password1,
    password2,
    email,
  });
  console.log(response);
  return response;
};

export const check = () => {
  console.log('check');
};

export const logout = () => client.post('/rest-auth/logout');
