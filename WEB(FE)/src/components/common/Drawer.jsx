import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const DrawerSide = tw.div`
  drawer-side
`;

const Drawer = ({ closeOverlay, user }) => {
  return (
    <DrawerSide>
      <label htmlFor='side-menu' className='drawer-overlay'></label>
      <ul className=' menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100'>
        <li className='mt-2'>
          <input
            type='search'
            placeholder='SEARCH'
            className='input input-bordered'
          />
        </li>
        <li className='mt-2'>
          {user ? (
            <Link
              className='bg-gray-300 hover:bg-gray-500 text-gray-700 active:text-white dark:text-white'
              to='mypage'
              onClick={closeOverlay}
            >
              {user.username}
            </Link>
          ) : (
            <Link
              className='bg-gray-300 hover:bg-gray-500 text-gray-700 active:text-white dark:text-white'
              to='login'
              onClick={closeOverlay}
            >
              로그인
            </Link>
          )}
        </li>
        <li className='mt-2'>
          <Link
            className='bg-gray-300 hover:bg-gray-500 text-gray-700 active:text-white dark:text-white'
            to='/map'
            onClick={closeOverlay}
          >
            지도
          </Link>
        </li>
        <li className='mt-2'>
          <Link
            className='bg-gray-300 hover:bg-gray-500 text-gray-700 active:text-white dark:text-white'
            to='/posts'
            onClick={closeOverlay}
          >
            게시판
          </Link>
        </li>
      </ul>
    </DrawerSide>
  );
};
export default Drawer;
