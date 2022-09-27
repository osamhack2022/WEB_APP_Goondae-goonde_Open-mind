import client from './client';

export const login = ({ username, password }) =>
  client.post('/users/login', { username, password });

export const register = ({ username, password, password2, eamil }) =>
  client.post('/users/regitser', { username, password, password2, eamil });

export const check = () => {
  console.log('check');
};

export const logout = () => {
  console.log('logout');
};
