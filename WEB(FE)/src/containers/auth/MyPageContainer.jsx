import { useState } from 'react';
import { useSelector } from 'react-redux';
import MyPageForm from '../../components/auth/MyPageForm';
import PasswordModal from '../../components/auth/PasswordModal';
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
    <div className='h-5/6'>
      <MyPageForm user={user} setVisible={setVisible} />
      <PasswordModal
        visible={visible}
        setVisible={setVisible}
        handleClick={onClick}
        error={error}
      />
    </div>
  );
};

export default MyPageContainer;
