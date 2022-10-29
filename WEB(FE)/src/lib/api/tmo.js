import client from './client';

export const tmoList = ({ page, likePK }) => {
  if (likePK) {
    return client.get(`/locations/tmo/?likes=${likePK}`);
  } else {
    if (page) {
      return client.get(`/locations/tmo/?page=${page}`);
    } else {
      return client.get('/locations/tmo/');
    }
  }
};

export const readTmo = (tmoId) => {
  return client.get(`/locations/tmo/${tmoId}/`);
};
