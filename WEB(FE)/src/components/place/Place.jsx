import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import MapContainer from '../../containers/map/MapContainer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Place = ({ product, location, reviews, fake, setVisible, image }) => {
  return (
    <div className='bg-white mt-[4rem]'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            <li>
              <div className='flex items-center'>
                <Link
                  to={`/index/?category=${location.category}`}
                  className=' mr-2 text-sm font-medium text-gray-900'
                >
                  {location.category}
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>

            <li className='text-sm'>
              <a
                href={product.href}
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {location.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src={image[0].image_url || product.images[0].src}
              alt={product.images[0].alt}
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
              <img
                src={image[1].image_url || product.images[1].src}
                alt={product.images[1].alt}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
              <img
                src={image[2].image_url || product.images[2].src}
                alt={product.images[2].alt}
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4'>
            {/* <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className='h-full w-full object-cover object-center'
            /> */}
            <MapContainer searchAddress={location.address} />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {location.name}{' '}
              <span className='text-md sm:text-lg text-gray-400'>
                {' '}
                {location.category}
              </span>
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-2xl tracking-tight text-gray-900'>
              {location.address}
            </p>
            <p className='text-xl tracking-tight text-gray-600'>
              {location.number}
            </p>

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only' onClick={() => setVisible(true)}>
                Reviews
              </h3>

              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        fake.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{fake.average} out of 5 stars</p>
                <button
                  onClick={() => setVisible(true)}
                  className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                >
                  {reviews.count} reviews
                </button>
              </div>
            </div>

            <form className='mt-10'>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
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
                <p className='text-base text-gray-900'>{location.benefit}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Place);
