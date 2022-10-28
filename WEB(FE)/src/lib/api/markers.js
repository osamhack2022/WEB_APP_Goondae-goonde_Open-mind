import client from './client';

export const markersSearchByRegion = ({ region1, region2 }) => {
  console.log(region1, region2);
  if (!region2) {
    return client.get(`/locations/location/?region1=${region1}`);
  } else {
    return client.get(
      `/locations/location/?region1=${region1}&region2=${region2}`
    );
  }
};
