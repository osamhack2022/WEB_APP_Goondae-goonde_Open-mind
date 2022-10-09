import MyPageContainer from '../containers/auth/MyPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const MyPage = () => {
  return (
    <>
      <HeaderContainer visible={false} />
      <MyPageContainer />
      <FooterContainer />
    </>
  );
};

export default MyPage;
