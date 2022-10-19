import { useState } from 'react';
import AskRemoveModal from './AskRemoveModal';

const ReviewActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    console.log('click');
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <>
      <div className='fixed right-10'>
        <button onClick={onEdit} className='btn-sm btn-ghost rounded-lg mr-2'>
          수정
        </button>
        <button onClick={onRemoveClick} className='btn-sm btn-ghost rounded-lg'>
          삭제
        </button>
      </div>
      <AskRemoveModal
        visible={modal}
        setVisible={setModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ReviewActionButtons;
