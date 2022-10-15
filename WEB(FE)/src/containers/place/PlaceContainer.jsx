import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BreadCrumb from '../../components/common/BreadCrumb';
import Place from '../../components/place/Place';
import ReviewModal from '../../components/review/ReviewModal';
import { product, reviews } from '../../lib/fakeData/product';
import { readLocation } from '../../modules/location';

const PlaceContainer = () => {
  const [visible, setVisible] = useState(false);
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
        <>
          <BreadCrumb category={product.category} crumb={product.name} />
          <Place
            product={product}
            location={location}
            reviews={reviews}
            setVisible={setVisible}
          />
          <ReviewModal
            product={product}
            location={location}
            visible={visible}
            setVisible={setVisible}
          />
        </>
      )}
    </>
  );
};

export default PlaceContainer;
