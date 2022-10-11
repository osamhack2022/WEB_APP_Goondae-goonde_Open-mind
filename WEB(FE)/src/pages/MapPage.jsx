import MapContainer from '../containers/map/MapContainer';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const MapPage = () => {
  return (
    <>
      <HeaderContainer />
      <MapContainer searchAddress={'경기 고양시 덕양구 화정로 52'} />;
      <FooterContainer />
    </>
  );
};

export default MapPage;
