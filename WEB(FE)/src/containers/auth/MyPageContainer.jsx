import { useState } from 'react';
import { useSelector } from 'react-redux';
import MyPageForm from '../../components/auth/MyPageForm';
import PasswordModal from '../../components/auth/PasswordModal';
import Responsive from '../../components/common/Responsive';
import { passwordChange } from '../../lib/api/auth';

const MyPageContainer = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onClick = async (password, passwordCheck) => {
    try {
      await passwordChange(password, passwordCheck);
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    } finally {
      setVisible(false);
    }
  };
  return (
    <Responsive>
      <div className='mt-[6rem] mb-[5rem] h-[70vh]'>
        <MyPageForm user={user} setVisible={setVisible} />
        <PasswordModal
          visible={visible}
          setVisible={setVisible}
          handleClick={onClick}
          error={error}
        />
      </div>
    </Responsive>
  );
};

export default MyPageContainer;
