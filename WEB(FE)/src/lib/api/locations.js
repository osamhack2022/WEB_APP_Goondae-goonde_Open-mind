import client from './client';

export const locationsList = ({ page }) => {
  if (page) {
    return client.get(`/locations/?page=${page}`);
  } else {
    return client.get('/locations');
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
  console.log(
    'author',
    author,
    'title',
    title,
    'content',
    content,
    'lo',
    location_id
  );
  client.post(
    '/locations/reviews/',
    { author, title, content, location_id },
    { headers: { Authorization: `jwt ${user.token}` } }
  );
};
