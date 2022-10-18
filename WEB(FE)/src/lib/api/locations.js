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
  client.get(`/locations/${placeId}`);

export const getLocationReviews = ({ placeId }) =>
  client.get(`/locations/reviews/?location=${placeId}`);

export const createLocationReview = ({
  author,
  title,
  content,
  location_id,
}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  client.post(
    '/locations/reviews/',
    { author, title, content, location_id },
    { headers: { Authorization: `jwt ${user.token}` } }
  );
};
