import client from './client';

export const locationsList = ({ category, page, likePK }) => {
  if (likePK) {
    return client.get(`/locations/location/?likes=${likePK}`);
  } else {
    if (page) {
      if (category) {
        return client.get(
          `/locations/location/?category=${category}&page=${page}`
        );
      } else {
        return client.get(`/locations/location/?page=${page}`);
      }
    } else {
      if (category) {
        return client.get(`/locations/location/?category=${category}`);
      } else {
        return client.get('/locations/location/');
      }
    }
  }
};

export const readLocation = ({ placeId }) =>
  client.get(`/locations/location/${placeId}/`);

export const getLocationReviews = async ({ placeId }) =>
  client.get(`/locations/location/${placeId}/reviews/`);

export const createLocationReview = ({ content, location_id }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.post(
    `/locations/location/${location_id}/reviews/`,
    { content },
    { headers: { Authorization: `jwt ${user.token}` } }
  );
};

export const removeLocationRview = ({ placeId, reviewId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.delete(`/locations/location/${placeId}/reviews/${reviewId}/`, {
    headers: {
      Authorization: `jwt ${user.token}`,
    },
  });
};
export const addLikeLocationReview = async ({ placeId, reviewId }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await client.patch(
    `/locations/location/${placeId}/reviews/${reviewId}/like`,
    {},
    {
      headers: {
        Authorization: `jwt ${user.token}`,
      },
    }
  );
  return { data: { reviewId, ...response.data } };
};
