import { Helmet } from 'react-helmet-async';
import ReviewModal from '../components/review/ReviewModal';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlaceContainer from '../containers/place/PlaceContainer';

const PlacePage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 장소 상세보기</title>
      </Helmet>
      <HeaderContainer />
      <PlaceContainer />
      <FooterContainer />
    </>
  );
};

export default PlacePage;
