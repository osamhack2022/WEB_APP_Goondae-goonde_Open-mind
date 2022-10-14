import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import LikeBtn from '../../components/post/Like';
import { addLike } from '../../modules/post';

const LikeWrapper = styled(Responsive)`
  margin-bottom: 4rem;
`;

const LikeContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    loading: loading['post/ADD_LIKE'],
  }));
  console.log(loading, post);
  const onClick = () => {
    console.log('click');
    const likes = post.likes;
    dispatch(addLike({ likes, postId }));
  };
  return (
    <>
      {!loading && post && (
        <LikeWrapper>
          <LikeBtn likeCnt={post.likes} onClick={onClick} />
        </LikeWrapper>
      )}
    </>
  );
};

export default LikeContainer;
