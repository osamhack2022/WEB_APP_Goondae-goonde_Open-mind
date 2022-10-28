import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, setVisible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      setVisible={setVisible}
      title='댓글 삭제'
      description='댓글을 정말 삭제하시겠습니까?'
      confirmText='삭제'
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskRemoveModal;
