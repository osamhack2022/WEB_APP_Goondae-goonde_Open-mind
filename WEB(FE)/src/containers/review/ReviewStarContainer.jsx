import { useEffect, useState } from 'react';
import ReviewStar from '../../components/review/ReviewStar';

const ReviewStarContainer = ({ handleSubmit, ownStar }) => {
  const [value, setValue] = useState(0);
  const [own, setOwn] = useState(false);
  useEffect(() => {
    if (ownStar) {
      setValue(ownStar);
      setOwn(ownStar);
    }
  }, [ownStar]);

  const handleMouseEnter = (el) => {
    if (own) return;
    setValue(el);
  };
  const onSubmit = (el) => {
    if (own) return;
    handleSubmit(el);
    setOwn(el);
  };

  return (
    <ReviewStar
      value={value}
      onSubmit={onSubmit}
      ownStar={own}
      handleMouseEnter={handleMouseEnter}
    />
  );
};

export default ReviewStarContainer;
