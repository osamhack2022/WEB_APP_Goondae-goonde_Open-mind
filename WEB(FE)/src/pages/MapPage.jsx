import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MyLocationMapContainer from '../containers/map/MyLocationMapContainer';

const MapPage = () => {
  return (
    <>
      <HeaderContainer />
      <MyLocationMapContainer />
      <FooterContainer />
    </>
  );
};

export default MapPage;
