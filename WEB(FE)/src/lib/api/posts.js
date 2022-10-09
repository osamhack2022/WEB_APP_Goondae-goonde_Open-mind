import client from './client';

export const writePost = () => {
  console.log('write');
};

export const updatePost = () => {
  console.log('update');
};

export const listPosts = () => client.get('/posts');
