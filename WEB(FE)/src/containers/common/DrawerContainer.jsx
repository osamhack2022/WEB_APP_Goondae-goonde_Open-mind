import { useSelector } from 'react-redux';
import Drawer from '../../components/common/Drawer';

const DrawerContainer = ({ closeOverlay }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <Drawer closeOverlay={closeOverlay} user={user} />;
};
export default DrawerContainer;
