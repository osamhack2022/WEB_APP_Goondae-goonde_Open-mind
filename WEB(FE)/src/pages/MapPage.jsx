import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MyLocationMapContainer from '../containers/map/MyLocationMapContainer';

const MapPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - 지도</title>
      </Helmet>
      <HeaderContainer />
      <MyLocationMapContainer />
      <FooterContainer />
    </>
  );
};

export default MapPage;
