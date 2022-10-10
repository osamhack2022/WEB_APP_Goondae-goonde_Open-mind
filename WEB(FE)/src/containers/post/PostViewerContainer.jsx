import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from '../../../node_modules/react-redux/es/exports';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import {
  useParams,
  useNavigate,
} from '../../../node_modules/react-router-dom/index';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user._id) === (post && post.user._id);
  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
