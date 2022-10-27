import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MOUContainer from '../containers/mou/MOUContainer';

const MOUPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - MOU 상세보기</title>
      </Helmet>
      <HeaderContainer />
      <MOUContainer />
      <FooterContainer />
    </>
  );
};

export default MOUPage;
