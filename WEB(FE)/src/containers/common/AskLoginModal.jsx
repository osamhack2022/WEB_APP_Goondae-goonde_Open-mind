import { useNavigate } from 'react-router-dom';
import AskModal from '../../components/common/AskModal';

const AskLoginModal = ({ visible, setVisible }) => {
  const navigator = useNavigate();
  const onConfirm = () => navigator('/login');
  const onCancel = () => setVisible(false);
  return (
    <AskModal
      visible={visible}
      setVisible={setVisible}
      title='로그인을 하세요'
      description='로그인 하시겠습니까?'
      confirnText='로그인'
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskLoginModal;
