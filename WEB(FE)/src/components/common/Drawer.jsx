import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const DrawerSide = tw.div`
  drawer-sideS
`;

const Drawer = ({ closeOverlay }) => {
  return (
    <DrawerSide>
      <label htmlFor='side-menu' className='drawer-overlay'></label>
      <ul className=' menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100'>
        <li>
          <input type='search' className='input input-bordered' />
        </li>
        <li>
          <Link
            className='text-gray-700 active:text-white dark:text-white'
            to='/'
            onClick={closeOverlay}
          >
            "menu.title"
          </Link>
        </li>
      </ul>
    </DrawerSide>
  );
};
export default Drawer;
