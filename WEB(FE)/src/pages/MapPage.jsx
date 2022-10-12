import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MyLocationMapContainer from '../containers/map/MyLocationMapContainer';

const MapPage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 지도</title>
      </Helmet>
      <HeaderContainer />
      <MyLocationMapContainer />
      <FooterContainer />
    </>
  );
};

export default MapPage;
