import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import ItemsContainer from '../containers/intro/ItemsContainer';

const Mainpage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데</title>
      </Helmet>
      <HeaderContainer />
      <ItemsContainer />
      <FooterContainer />
    </>
  );
};
export default Mainpage;
