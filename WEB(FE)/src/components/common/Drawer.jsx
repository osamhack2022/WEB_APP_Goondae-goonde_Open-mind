import { Link } from 'react-router-dom';
import Search from './Search';

const Drawer = ({ closeOverlay }) => {
  return (
    <div className='drawer-side'>
      <label htmlFor='side-menu' className='drawer-overlay'></label>
      <ul className='menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100'>
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
    </div>
  );
};
export default Drawer;
