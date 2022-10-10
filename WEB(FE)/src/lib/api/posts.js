import client from './client';

export const writePost = ({ title, content }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return client.post(
    '/posts/',
    { title, content },
    {
      headers: {
        Authorization: `jwt ${user.token}`,
      },
    }
  );
};

export const readPost = (id) => client.get(`/posts/${id}`);

export const updatePost = () => {
  console.log('update');
};

export const removePost = () => {
  console.log('remove');
};

export const listPosts = ({ page }) => {
  if (page) {
    return client.get(`/posts/?page=${page}`);
  } else {
    return client.get('/posts');
  }
};
