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

export const readPost = (id) => client.get(`/posts/${id}/`);

export const updatePost = ({ title, content, originalPostId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.put(
    `/posts/${originalPostId}/`,
    { title, content },
    {
      headers: {
        Authorization: `jwt ${user.token}`,
      },
    }
  );
};

export const removePost = (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.delete(`/posts/${id}/`, {
    headers: {
      Authorization: `jwt ${user.token}`,
    },
  });
};

export const listPosts = ({ page }) => {
  if (page) {
    return client.get(`/posts/?page=${page}`);
  } else {
    return client.get('/posts');
  }
};
