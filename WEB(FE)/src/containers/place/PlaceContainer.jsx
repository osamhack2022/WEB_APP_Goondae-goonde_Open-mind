import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import Place from '../../components/place/Place';
import ReviewModal from '../../components/review/ReviewModal';
import { removeLocationRview } from '../../lib/api/locations';
import { product, reviews as fake } from '../../lib/fakeData/product';
import { readLocation } from '../../modules/location';
import {
  changeField,
  createReview,
  initializeForm,
  list,
} from '../../modules/reviews';

const PlaceContainer = () => {
  const [visible, setVisible] = useState(false);
  const [reviewsArray, setReviewsArray] = useState([]);
  const navigate = useNavigate();
  const { placeId } = useParams();

  const dispatch = useDispatch();
  const { location, error, user, loading, reviews, review } = useSelector(
    ({ location, loading, user, reviews }) => ({
      location: location.location,
      error: location.error,
      user: user.user,
      reviews: reviews.reviews,
      review: reviews.review,
      loading: loading['location/READ_LOCATION'],
    })
  );
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ form: 'review', value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReview({
        author: 1,
        title: '1',
        content: review,
        location_id: location.id,
      })
    );
    dispatch(initializeForm('review'));
  };

  const handleClose = () => {
    setVisible(false);
    dispatch(initializeForm('review'));
  };

  const onEdit = () => {};
  const onRemove = async (reviewId) => {
    try {
      await removeLocationRview({ placeId: location.id, reviewId });
    } catch (e) {
      console.error(e);
    } finally {
      navigate(0);
    }
  };

  useEffect(() => {
    dispatch(readLocation({ placeId }));
    dispatch(list({ placeId }));
    return () => dispatch(initializeForm('review'));
  }, [dispatch, placeId]);

  useEffect(() => {
    reviews && setReviewsArray(reviews.results);
  }, [reviews]);

  return (
    <>
      {!loading && location && reviews && (
        <>
          <Place
            product={product}
            location={location}
            reviews={reviews}
            fake={fake}
            setVisible={setVisible}
          />
          <ReviewModal
            product={product}
            reviews={reviews}
            location={location}
            visible={visible}
            review={review}
            setVisible={setVisible}
            onSubmit={onSubmit}
            onChange={onChange}
            handleClose={handleClose}
            user={user}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        </>
      )}
    </>
  );
};

export default PlaceContainer;
