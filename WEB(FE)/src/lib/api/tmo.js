import client from './client';

export const tmoList = ({ page }) => {
  if (page) {
    return client.get(`/locations/tmo/?page=${page}`);
  } else {
    return client.get('/locations/tmo/');
  }
};

export const readTmo = (tmoId) => {
  console.log('readTMO', tmoId);
  return client.get(`/locations/tmo/${tmoId}/`);
};
