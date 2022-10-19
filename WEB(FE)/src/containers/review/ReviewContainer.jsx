import ReviewModal from '../../components/review/ReviewModal';

const ReviewContainer = ({
  product,
  reviews,
  location,
  visible,
  review,
  setVisible,
  onSubmit,
  onChange,
  handleClose,
}) => {
  return (
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
    />
  );
};
export default ReviewContainer;
