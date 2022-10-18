import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import ReviewItem from './ReviewItem';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ReviewModal = ({
  location,
  reviews,
  product,
  visible,
  setVisible,
  onChange,
  onSubmit,
}) => {
  if (!visible) return null;
  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setVisible}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              enterTo='opacity-100 translate-y-0 md:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 md:scale-100'
              leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            >
              <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                  <button
                    type='button'
                    className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                    onClick={() => setVisible(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  <div className='grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 '>
                    <div className='sm:col-span-8 lg:col-span-7'>
                      <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
                        {location.name}{' '}
                        <span className='text-xl text-gray-500'>
                          {location.category}
                        </span>
                      </h2>

                      <section
                        aria-labelledby='information-heading'
                        className='mt-2'
                      >
                        {/* Reviews */}
                        <div className='mt-6'>
                          <h4 className='sr-only'>Reviews</h4>
                          <div className='flex items-center'>
                            <div className='flex items-center'>
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating
                                      ? 'text-gray-900'
                                      : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                              ))}
                            </div>
                            <p className='sr-only'>
                              {product.rating} out of 5 stars
                            </p>
                            <span className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                              {reviews.count} reviews
                            </span>
                          </div>
                        </div>
                      </section>
                      <section className='mt-5'>
                        <form action='submit' onSubmit={onSubmit}>
                          <input
                            type='text'
                            className='w-full bg-gray-300 px-3 py-3 rounded-3xl'
                            placeholder='입력하세요'
                            onChange={onChange}
                          />
                        </form>
                        {reviews.results &&
                          reviews.results.map((review) => {
                            return (
                              <ReviewItem
                                key={review.pk}
                                image={review.profile.profile_image}
                                createdAt={review.created_at}
                                username={review.profile.username}
                                content={review.content}
                              />
                            );
                          })}
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ReviewModal;
