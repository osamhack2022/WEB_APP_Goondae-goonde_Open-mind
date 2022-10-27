import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import TMOIndexContainer from '../containers/tmo/TMOIndexContainer';

const PlacePage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - TMO 상세보기</title>
      </Helmet>
      <HeaderContainer />
      <TMOIndexContainer />
      <FooterContainer />
    </>
  );
};

export default PlacePage;
