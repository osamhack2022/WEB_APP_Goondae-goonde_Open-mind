import styled from 'styled-components';
import Button from '../../components/common/Button';
import Responsive from '../../components/common/Responsive';
import SubInfo from '../../components/common/SubInfo';
import palette from '../../lib/styles/palette';
import { Link, useSearchParams } from 'react-router-dom';
import search from '../../lib/api/search';

const PostListBlock = styled(Responsive)`
  margin-top: 7rem;
  min-height: 60vh;
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
  const { created_at, author, title, pk } = post;
  return (
    <PostItemBlock>
      <Link to={`/posts/@${author || 'name'}/${pk}`}>{title}</Link>
      <SubInfo author={author || 'name'} created_at={new Date(created_at)} />
    </PostItemBlock>
  );
};

const PostList = ({ loading, error, posts, showWriteButton }) => {
  const [searchParams] = useSearchParams();
  const like = searchParams.get('like');

  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && !like && (
          <Button cyan to='write'>
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.results.map((post) => (
            <PostItem post={post} key={post.pk} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
