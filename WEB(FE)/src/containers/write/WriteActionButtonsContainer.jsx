import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
=======
  const { title, content, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      content: write.content,
>>>>>>> hotfix/conflict
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
<<<<<<< HEAD
          body,
          tags,
=======
          content,
>>>>>>> hotfix/conflict
          originalPostId: originalPostId,
        })
      );
      return;
    }
    dispatch(
      writePost({
        title,
<<<<<<< HEAD
        body,
        tags,
=======
        content,
>>>>>>> hotfix/conflict
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
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
