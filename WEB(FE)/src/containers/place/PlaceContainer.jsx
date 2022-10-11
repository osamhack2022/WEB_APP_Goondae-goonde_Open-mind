import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Place from '../../components/place/Place';
import { product, reviews } from '../../lib/fakeData/product';
import { readLocation } from '../../modules/location';

const PlaceContainer = () => {
  const { placeId } = useParams();
  const dispatch = useDispatch();
  const { location, error, user, loading } = useSelector(
    ({ location, loading, user }) => ({
      location: location.location,
      error: location.error,
      user: user.user,
      loading: loading['location/READ_LOCATION'],
    })
  );

  useEffect(() => {
    dispatch(readLocation({ placeId }));
  }, [dispatch, placeId]);

  return (
    <>
      {!loading && location && (
        <Place product={product} location={location} reviews={reviews} />
      )}
    </>
  );
};

export default PlaceContainer;
