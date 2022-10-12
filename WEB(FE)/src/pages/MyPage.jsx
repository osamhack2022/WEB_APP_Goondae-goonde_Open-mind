import { Helmet } from 'react-helmet-async';
import MyPageContainer from '../containers/auth/MyPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const MyPage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 내 정보 수정</title>
      </Helmet>
      <HeaderContainer visible={false} />
      <MyPageContainer />
      <FooterContainer />
    </>
  );
};

export default MyPage;
