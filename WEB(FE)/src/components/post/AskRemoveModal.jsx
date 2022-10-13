import AskModal from '../common/AskModal';

const AskMoveModal = ({ visible, setVisible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      setVisible={setVisible}
      title='포스트 삭제'
      description='포스트를 정말 삭제하시겠습니까?'
      confirmText='삭제'
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskMoveModal;
