import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const themeLight = 'emerald';
const themeDark = 'dark';
const $html = document.querySelector('html');

const HeaderContainer = ({ visible = true }) => {
  const themeChange = (event) => {
    if (event.target.checked) {
      setLight();
    } else {
      setDark();
    }
  };

  const setLight = () => {
    $html?.classList.remove(themeDark);
    $html?.setAttribute('data-theme', themeLight);
    localStorage.setItem('theme', themeLight);
  };

  const setDark = () => {
    $html?.classList.add(themeDark);
    $html?.setAttribute('data-theme', themeDark);
    localStorage.setItem('theme', themeDark);
  };

  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogOut = () => {
    console.log('logout');
    dispatch(logout());
  };

  useEffect(() => {
    if (themeLight === localStorage.getItem('theme')) {
      setLight();
      document.querySelector('.js-theme')?.setAttribute('checked', 'checked');
    } else {
      setDark();
    }
  }, []);

  return (
    <Header
      visible={visible}
      user={user}
      onLogOut={onLogOut}
      themeChange={themeChange}
    />
  );
};

export default HeaderContainer;
