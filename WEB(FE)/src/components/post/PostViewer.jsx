import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
  margin-top: 6rem;
  min-height: 65vh;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트 입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }
  const { title, content, profile, created_at } = post;
  return (
    <PostViewerBlock>
      <Helmet>
        <title>OPEN MIND - {title} </title>
      </Helmet>
      <PostHead>
        <h2 className='text-4xl font-extrabold'>{title}</h2>
        <SubInfo
          author={profile?.username || 'name'}
          created_at={created_at}
          hasMarginTop
        />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
