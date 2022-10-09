import client from './client';

export const locationsList = () => {
  console.log('page');
  return client.get('/locations');
};

export const locationsRead = ({ name }) => client.get(`/locations/${name}`);
