import { Link } from 'react-router-dom';

const LoadingPlaceItem = () => {
  return (
    <Link to='/' className='group '>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg opacity-50 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <div className='h-full w-full object-cover object-center opacity-20 bg-gray-300' />
      </div>
      <div className='mt-4 text-lg bg-gray-300 text-gray-300 opacity-30 w-full'>
        '{' '}
      </div>
      <p className='mt-1 text-sm font-normal text-gray-300 bg-gray-300 opacity-20 w-2/3'>
        <span className='text-gray-300'>""</span>
        <span className='ml-2 bg-gray-600'></span>
      </p>

      <p className='mt-1 text-lg text-gray-300  bg-gray-300 opacity-10 w-1/2'>
        <span>''</span>
      </p>
    </Link>
  );
};

export default LoadingPlaceItem;
