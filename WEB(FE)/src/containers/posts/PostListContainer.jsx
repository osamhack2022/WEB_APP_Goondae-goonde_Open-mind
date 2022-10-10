import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { listPosts } from '../../modules/posts';
import PostList from '../posts/PostList';

const PostListContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    })
  );

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10) || 1;
    console.log(page);
    dispatch(listPosts({ username, page }));
  }, [dispatch, searchParams, username]);

  return (
    <>
      {loading ? (
        <>
          <PostList />
        </>
      ) : (
        posts && (
          <PostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
          />
        )
      )}
    </>
  );
};
export default PostListContainer;
