import styled from 'styled-components';
import Button from '../../components/common/Button';
import Responsive from '../../components/common/Responsive';
import SubInfo from '../../components/common/SubInfo';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 7rem;
  height: 60vh;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, title, body, _id } = post;
  return (
    <PostItemBlock>
      <Link to={`/@${user?.username || 'name'}/${_id}`}>{title}</Link>
      <SubInfo
        username={user?.username || 'name'}
        publishedDate={new Date(publishedDate)}
      />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ loading, error, posts, showWriteButton }) => {
  posts = posts.result;
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to='write'>
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
