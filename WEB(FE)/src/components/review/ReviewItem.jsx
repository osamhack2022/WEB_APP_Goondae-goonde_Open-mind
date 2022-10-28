import React from 'react';
import userDefault from '../../lib/img/userDefault.png';
const ReviewItem = ({
  image,
  username,
  content,
  createdAt,
  actionButtons,
  onClick,
  cnt,
}) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <div className='mt-[1rem] pb-5 border-b-2 min-w-[340px]'>
      <div className='flex relative'>
        <div>
          <img
            className='h-10 rounded-xl'
            src={image ? userDefault : image}
            alt='user'
          />
        </div>
        <div className='flex flex-col ml-3'>
          <span className='font-bold'>{username}</span>
          <span className='text-sm text-gray-400'>{`${year}년 ${month}월`}</span>
        </div>
        {actionButtons}
      </div>
      <p className='mt-5'>{content}</p>
      <button className='mt-3 ml-3' onClick={onClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-8 h-8 border-2 rounded-full p-1'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
        {cnt}
      </button>
    </div>
  );
};

export default React.memo(ReviewItem);
