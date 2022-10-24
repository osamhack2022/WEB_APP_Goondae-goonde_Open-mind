import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const LoadingPlace = () => {
  return (
    <div className='bg-white mt-[4rem] animate-pulse'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            <li>
              <div className='flex items-center'>
                <Link
                  to={'#'}
                  className='mr-2 text-sm font-medium bg-gray-300 '
                ></Link>
                <svg
                  width={16}
                  height={20}
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='h-5 w-4 bg-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>

            <li className='text-sm'>
              <a
                href={'#'}
                aria-current='page'
                className='font-medium text-gray-300 bg-gray-300 hover:text-gray-600'
              >
                {'로딩 중'}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
            <div className='h-full w-full object-cover object-center bg-gray-300' />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
              <div className='h-full w-full object-cover object-center bg-gray-300' />
            </div>
            <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
              <div className='h-full w-full object-cover object-center bg-gray-300' />
            </div>
          </div>
          <div className='aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4'>
            <div className='h-full w-full object-cover object-center bg-gray-300' />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-300 bg-gray-300 sm:text-3xl'>
              {'기본 제목'}
              <span className='text-md sm:text-lg text-gray-300 bg-gray-300'>
                {' '}
                {'기본 카테고리'}
              </span>
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-2xl tracking-tight text-gray-300 bg-gray-300'>
              {'기본 주소'}
            </p>
            <p className=' mt-1 w-1/2 text-xl tracking-tight text-gray-300 bg-gray-300'>
              {'기본 번호'}
            </p>

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>

              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        5 > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>

                <button className='ml-3 text-sm font-medium text-gray-300 bg-gray-300 hover:text-indigo-500'>
                  0 reviews
                </button>
              </div>
            </div>

            <form className='mt-10'>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-300 py-3 px-8 text-base font-medium text-gray-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                사이트 바로가기
              </button>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-300 bg-gray-300 w-1/4'>
                  {'기본 혜택'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPlace;
