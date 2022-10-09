import Map from '../components/map/Map';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const MapPage = () => {
  return (
    <>
      <HeaderContainer />
      <Map />;
      <FooterContainer />
    </>
  );
};

export default MapPage;
