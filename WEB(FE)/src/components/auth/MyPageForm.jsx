import Responsive from '../common/Responsive';

const MyPageForm = ({ user, setVisible }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  return (
    <Responsive>
      <div className='mt-[8rem] md:col-span-2'>
        <form action='#' method='POST'>
          <div className='overflow-hidden shadow sm:rounded-md'>
            <div className='bg-white px-4 py-5 sm:p-6'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-4'>
                  <label
                    htmlFor='email-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    User name
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    autoComplete='username'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    placeholder={user.username}
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-4'>
                  <label
                    htmlFor='email-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email address
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    placeholder={user.email}
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>Republic of Korea</option>
                  </select>
                </div>

                <div className='col-span-6'>
                  <label
                    htmlFor='street-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Street address
                  </label>
                  <input
                    type='text'
                    name='street-address'
                    id='street-address'
                    autoComplete='street-address'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <button
                onClick={handleClick}
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-5'
              >
                비밀번호 변경하기
              </button>
              <button
                type='submit'
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Responsive>
  );
};
export default MyPageForm;
