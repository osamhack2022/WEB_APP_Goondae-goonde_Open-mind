import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
const PasswordModal = ({ visible, setVisible, handleClick, error }) => {
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const handleChange = (e) => {
    const inputType = e.target.name;
    if (inputType === 'password') {
      setPassword(e.target.value);
    } else {
      setPasswordCheck(e.target.value);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    handleClick(password, passwordCheck);
  };
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

                  <div className='grid w-full grid-cols-1 items-start '>
                    <div className='sm:col-span-8 lg:col-span-7'>
                      <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
                        비밀번호 변경하기
                      </h2>

                      <section
                        aria-labelledby='options-heading'
                        className='mt-10'
                      >
                        <h3 id='options-heading' className='sr-only'>
                          Product options
                        </h3>

                        <form className='w-full' onSubmit={onClick}>
                          <div>
                            <label htmlFor='password'>PASSWORD</label>
                            <input
                              type='password'
                              name='password'
                              id='password'
                              value={password}
                              onChange={handleChange}
                              className='w-full px-4 h-10 bg-slate-200 rounded-lg'
                            />
                          </div>
                          <div className='mt-5'>
                            <label htmlFor='passwordCheck'>
                              PASSWORD CHECK
                            </label>
                            <input
                              type='password'
                              name='passwordCheck'
                              id='passwordCheck'
                              value={passwordCheck}
                              onChange={handleChange}
                              className='w-full px-4 h-10 bg-slate-200 rounded-lg'
                            />
                          </div>
                          <span className='mt-2 text-red-500'>{error}</span>
                          <button
                            type='submit'
                            onClick={onClick}
                            className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          >
                            변경하기
                          </button>
                        </form>
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
export default PasswordModal;
