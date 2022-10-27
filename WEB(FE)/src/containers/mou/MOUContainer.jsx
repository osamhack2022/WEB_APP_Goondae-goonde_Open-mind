import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import LoadingPlace from '../../components/loading/LoadingPlace';
import Place from '../../components/place/Place';
import ReviewModal from '../../components/review/ReviewModal';
import { removeMOUReview } from '../../lib/api/mou';
import { product, reviews as fake } from '../../lib/fakeData/product';
import { initializeImage, readImage, readMOU } from '../../modules/mou';
import {
  changeField,
  createReview,
  initializeForm,
  likeReview,
  list,
} from '../../modules/reviews';

const PlaceContainer = () => {
  const [visible, setVisible] = useState(false);
  const [reviewsArray, setReviewsArray] = useState([]);
  const navigate = useNavigate();
  const { placeId } = useParams();

  const dispatch = useDispatch();
  const { mou, error, image, user, loading, reviews, review } = useSelector(
    ({ mou, loading, user, reviews }) => ({
      mou: mou.mou,
      image: mou.image,
      error: mou.error,
      user: user.user,
      reviews: reviews.reviews,
      review: reviews.review,
      loading: loading['mou/READ_LOCATION'],
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
        content: review,
        location_id: mou.id,
      })
    );
    dispatch(initializeForm('review'));
  };

  const handleClose = () => {
    setVisible(false);
    dispatch(initializeForm('review'));
  };

  const onEdit = () => {};
  const onClick = (reviewId) => {
    dispatch(likeReview({ placeId, reviewId }));
  };

  const onRemove = async (reviewId) => {
    try {
      await removeMOUReview({ placeId: mou.id, reviewId });
    } catch (e) {
      console.error(e);
    } finally {
      navigate(0);
    }
  };

  useEffect(() => {
    dispatch(readMOU({ placeId }));
    dispatch(list({ placeId }));
    return () => {
      dispatch(initializeForm('review'));
      dispatch(initializeForm('reviews'));
    };
  }, [dispatch, placeId]);

  useEffect(() => {
    if (!mou) return;
    dispatch(readImage(mou.name));
    return () => dispatch(initializeImage('image'));
  }, [mou]);

  useEffect(() => {
    reviews && setReviewsArray(reviews.results);
  }, [dispatch, reviews]);

  return (
    <>
      {!loading && mou && image && reviews ? (
        <>
          <Place
            product={product}
            location={mou}
            image={image}
            reviews={reviews}
            fake={fake}
            setVisible={setVisible}
          />
          <ReviewModal
            product={product}
            reviews={reviews}
            location={mou}
            visible={visible}
            review={review}
            setVisible={setVisible}
            onSubmit={onSubmit}
            onChange={onChange}
            handleClose={handleClose}
            user={user}
            onEdit={onEdit}
            onRemove={onRemove}
            onClick={onClick}
          />
        </>
      ) : (
        <>
          <LoadingPlace />
        </>
      )}
    </>
  );
};

export default PlaceContainer;
