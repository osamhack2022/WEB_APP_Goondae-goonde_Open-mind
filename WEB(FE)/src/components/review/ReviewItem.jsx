import userDefault from '../../lib/img/userDefault.png';
const ReviewItem = ({ image, username, content, createdAt }) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <div className='mt-[1rem] pb-5 border-b-2'>
      <div className='flex'>
        <div>
          <img className='h-10 rounded-xl' src={userDefault} alt='user' />
        </div>
        <div className='flex flex-col ml-3'>
          <span className='font-bold'>{username}</span>
          <span className='text-sm text-gray-400'>{`${year}년 ${month}월`}</span>
        </div>
      </div>
      <p className='mt-5'>{content}</p>
    </div>
  );
};

export default ReviewItem;
