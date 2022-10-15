import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
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
  const [clicked, setClicked] = useState(false);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    loading: loading['post/ADD_LIKE'],
  }));
  const likes = post ? post.likes : undefined;
  let likeCnt = likes ? likes[likes?.length - 1] : 0;
  console.log('rerender');
  const onClick = () => {
    console.log('click', post, clicked);
    setClicked(!clicked);
    console.log(likeCnt);
    dispatch(addLike({ postId }));
  };

  return (
    <LikeWrapper>
      <LikeBtn likeCnt={likeCnt} clicked={clicked} onClick={onClick} />
    </LikeWrapper>
  );
};

export default LikeContainer;
