import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlaceContainer from '../containers/place/PlaceContainer';

const PlacePage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - 혜택 상세보기</title>
      </Helmet>
      <HeaderContainer />
      <PlaceContainer />
      <FooterContainer />
    </>
  );
};

export default PlacePage;
