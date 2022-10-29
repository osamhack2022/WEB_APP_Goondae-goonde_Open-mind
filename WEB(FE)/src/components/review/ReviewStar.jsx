const ReviewStar = ({ value, onSubmit, handleMouseEnter }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((el) => (
        <input
          key={el}
          type='radio'
          value='1'
          name='rating-4'
          checked={el === value}
          onChange={() => handleMouseEnter(el)}
          onClick={() => onSubmit(el)}
          onMouseEnter={() => handleMouseEnter(el)}
          className='mask mask-star-2 bg-green-500'
        />
      ))}
    </div>
  );
};

export default ReviewStar;
