import client from './client';

<<<<<<< HEAD
export const writePost = () => {
  console.log('write');
=======
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
>>>>>>> hotfix/conflict
};

export const updatePost = () => {
  console.log('update');
};

export const listPosts = () => client.get('/posts');
