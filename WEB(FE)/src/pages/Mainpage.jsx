import { useRef } from 'react';
import DrawerContainer from '../containers/common/DrawerContainer';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import ItemsContainer from '../containers/intro/ItemsContainer';

const Mainpage = () => {
  const $hamburger = useRef(null);
  const $pages = useRef(null);
  const closeOverlay = () => {
    $hamburger.current.click();
  };
  return (
    <div className='drawer'>
      <input
        type='checkbox'
        id='side-menu'
        className='drawer-toggle'
        ref={$hamburger}
      />
      <section className='drawer-content' ref={$pages}>
        <HeaderContainer />
        <ItemsContainer />
        <FooterContainer />
      </section>
      <DrawerContainer closeOverlay={closeOverlay} />
    </div>
  );
};
export default Mainpage;
