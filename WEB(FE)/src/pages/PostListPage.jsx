import { Helmet } from 'react-helmet-async';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 장소 목록</title>
      </Helmet>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
      <FooterContainer />
    </>
  );
};

export default PostListPage;
