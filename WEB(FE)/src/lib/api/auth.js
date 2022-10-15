import client from './client';

export const login = ({ username, password }) =>
  client.post('/rest-auth/login', { username, password });

export const register = async ({ username, password1, password2, email }) => {
  const response = await client.post('/rest-auth/registration', {
    username,
    password1,
    password2,
    email,
  });
  return response;
};

export const logout = () => client.post('/rest-auth/logout');

export const passwordChange = (new_password1, new_password2) => {
  console.log(new_password1, new_password2);
  const user = JSON.parse(localStorage.getItem('user'));
  return client.post(
    '/rest-auth/password/change',
    {
      new_password1,
      new_password2,
    },
    {
      headers: {
        Authorization: `jwt ${user.token}`,
      },
    }
  );
};
