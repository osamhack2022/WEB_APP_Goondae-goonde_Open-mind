import client from './client';

export const mouList = ({ page }) => {
  if (page) {
    return client.get(`/locations/mou/?page=${page}`);
  } else {
    return client.get('/locations/mou/');
  }
};

export const readMOU = ({ placeId }) =>
  client.get(`/locations/mou/${placeId}/`);

export const getMOUReviews = async ({ placeId }) =>
  client.get(`/locations/mou/${placeId}/reviews/`);

export const createMOUReview = ({ content, location_id }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.post(
    `/locations/mou/${location_id}/reviews/`,
    { content },
    { headers: { Authorization: `jwt ${user.token}` } }
  );
};

export const removeMOUReview = ({ placeId, reviewId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.delete(`/locations/mou/${placeId}/reviews/${reviewId}/`, {
    headers: {
      Authorization: `jwt ${user.token}`,
    },
  });
};
export const addLikeMOUReview = async ({ placeId, reviewId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await client.patch(
    `/locations/mou/${placeId}/reviews/${reviewId}/like`,
    {},
    {
      headers: {
        Authorization: `jwt ${user.token}`,
      },
    }
  );
  return { data: { reviewId, ...response.data } };
};
