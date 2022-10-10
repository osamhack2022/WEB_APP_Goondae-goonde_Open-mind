import client from './client';

export const writePost = ({ title, content }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.token);
  return client.post(
    '/posts/',
    { title, content },
    {
      headers: {
        Authorization: user.token,
      },
    }
  );
};

export const updatePost = () => {
  console.log('update');
};

export const listPosts = () => client.get('/posts');
