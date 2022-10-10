import client from './client';

export const locationsList = ({ page }) => {
  if (page) {
    return client.get(`/locations/?page=${page}`);
  } else {
    return client.get('/locations');
  }
};

export const locationsRead = ({ name }) => client.get(`/locations/${name}`);
