import AskModal from '../common/AskModal';

const AskMoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title='포스트 삭제'
      description='포스트를 정말 삭제하시겠습니까?'
      confirmText='삭제'
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskMoveModal;
