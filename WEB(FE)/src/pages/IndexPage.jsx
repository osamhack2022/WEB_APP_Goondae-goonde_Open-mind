import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlaceListContainer from '../containers/placeList/PlaceListContainer';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - 혜택보기</title>
      </Helmet>
      <HeaderContainer />
      <PlaceListContainer />
      <FooterContainer />
    </>
  );
};

export default IndexPage;
