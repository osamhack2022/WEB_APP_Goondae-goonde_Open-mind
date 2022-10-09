import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlaceListContainer from '../containers/placeList/PlaceListContainer';

const IndexPage = () => {
  return (
    <>
      <HeaderContainer />
      <PlaceListContainer />
      <FooterContainer />
    </>
  );
};

export default IndexPage;
