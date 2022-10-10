import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, content, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      content: write.content,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    })
  );

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          title,
          content,
          originalPostId: originalPostId,
        })
      );
      return;
    }
    dispatch(
      writePost({
        title,
        content,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { profile, pk } = post;
      navigate(`/post/@${profile.username}/${pk}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;
