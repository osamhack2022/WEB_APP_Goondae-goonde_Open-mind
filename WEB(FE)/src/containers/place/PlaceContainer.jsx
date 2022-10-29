import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import LoadingPlace from '../../components/loading/LoadingPlace';
import Place from '../../components/place/Place';
import ReviewModal from '../../components/review/ReviewModal';
import { removeLocationRview } from '../../lib/api/locations';
import { product, reviews as fake } from '../../lib/fakeData/product';
import {
  initializeImage,
  likeLocation,
  readImage,
  readLocation,
  starLocation,
} from '../../modules/location';
import {
  changeField,
  createReview,
  initializeForm,
  likeReview,
  list,
} from '../../modules/reviews';
import AskLoginModal from '../common/AskLoginModal';

const PlaceContainer = () => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [reviewsArray, setReviewsArray] = useState([]);
  const [starTotal, setStarTotal] = useState(0);
  const [starCount, setStarCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const { placeId } = useParams();

  const dispatch = useDispatch();
  const { location, error, image, user, loading, reviews, review } =
    useSelector(({ location, loading, user, reviews }) => ({
      location: location.location,
      image: location.image,
      error: location.error,
      user: user.user,
      reviews: reviews.reviews,
      review: reviews.review,
      loading: loading['location/READ_LOCATION'],
    }));

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ form: 'review', value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setIsLogin(true);
      return;
    }
    dispatch(
      createReview({
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
  const onClick = (reviewId) => {
    if (!user) {
      setIsLogin(true);
      return;
    }
    dispatch(likeReview({ placeId, reviewId }));
  };

  const onRemove = async (reviewId) => {
    try {
      await removeLocationRview({ placeId: location.id, reviewId });
    } catch (e) {
      console.error(e);
    } finally {
      navigate(0);
    }
  };

  const addLike = () => {
    if (!user) {
      setIsLogin(true);
      return;
    }
    setClicked(!clicked);
    dispatch(likeLocation(placeId));
  };

  const onSubmitStar = (el) => {
    dispatch(starLocation({ placeId, rate: el }));
    setStarCount(starCount + 1);
    setStarTotal(Math.floor((starTotal + el) / (starCount + 1)));
  };

  useEffect(() => {
    dispatch(readLocation({ placeId }));
    dispatch(list({ placeId }));
    if (location) {
      setClicked(location.user_liked);
    }

    return () => {
      dispatch(initializeForm('review'));
      dispatch(initializeForm('reviews'));
    };
  }, [dispatch, placeId]);

  useEffect(() => {
    if (!location) return;
    dispatch(readImage(location.name));
    return () => dispatch(initializeImage('image'));
  }, [location]);

  useEffect(() => {
    reviews && setReviewsArray(reviews.results);
  }, [dispatch, reviews]);
  useEffect(() => {
    if (!location) return;
    setStarTotal(location.total_stars);
    setStarCount(location.count_stars);
  }, [location]);

  return (
    <>
      {!loading && location && image && reviews ? (
        <>
          <Place
            product={product}
            location={location}
            starCount={starCount}
            starTotal={starTotal}
            image={image}
            reviews={reviews}
            fake={fake}
            setVisible={setVisible}
            onClick={addLike}
            clicked={clicked}
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
            onClick={onClick}
            onSubmitStar={onSubmitStar}
          />
          <AskLoginModal visible={isLogin} setVisible={setIsLogin} />
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
