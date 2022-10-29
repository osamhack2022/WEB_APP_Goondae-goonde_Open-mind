import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import LikeContainer from '../containers/post/LikeContainer';

import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <LikeContainer />
      <FooterContainer />
    </>
  );
};

export default PostPage;
