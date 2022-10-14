import styled from 'styled-components';
import LikeImg from '../../lib/img/like.png';

const Like = styled.img`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  height: 3rem;
  :hover {
    transform: scale(1.05);
    transition: 0.1s transform ease-in;
  }
`;
const LikeBtn = ({ likeCnt, onClick }) => {
  return (
    <button onClick={onClick}>
      <Like src={LikeImg} alt='like' />
      {likeCnt}
    </button>
  );
};
export default LikeBtn;
