import client from './client';

export const locationsList = ({ category, page }) => {
  if (page) {
    if (category) {
      return client.get(`/locations/?category=${category}&page=${page}`);
    } else {
      return client.get(`/locations/?page=${page}`);
    }
  } else {
    if (category) {
      return client.get(`/locations/?category=${category}`);
    } else {
      return client.get('/locations');
    }
  }
};

export const readLocation = ({ placeId }) =>
  client.get(`/locations/${placeId}/`);

export const getLocationReviews = ({ placeId }) =>
  client.get(`/locations/${placeId}/reviews/`);

export const createLocationReview = ({ content, location_id }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.post(
    `/locations/${location_id}/reviews/`,
    { content },
    { headers: { Authorization: `jwt ${user.token}` } }
  );
};

export const removeLocationRview = ({ placeId, reviewId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.delete(`/locations/${placeId}/reviews/${reviewId}/`, {
    headers: {
      Authorization: `jwt ${user.token}`,
    },
  });
};
