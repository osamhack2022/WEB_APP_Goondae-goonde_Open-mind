import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import TMOContainer from '../containers/tmo/TMOContainer';

const TMOPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - TMO 상세보기</title>
      </Helmet>
      <HeaderContainer />
      <TMOContainer />
      <FooterContainer />
    </>
  );
};

export default TMOPage;
