import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MOUIndexContainer from '../containers/mou/MOUIndexContainer';

const MOUIndexPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - MOU 현황</title>
      </Helmet>
      <HeaderContainer />
      <MOUIndexContainer />
      <FooterContainer />
    </>
  );
};

export default MOUIndexPage;
