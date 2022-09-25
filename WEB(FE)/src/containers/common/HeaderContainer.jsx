import { useEffect } from 'react';
import Header from '../../components/common/Header';

const themeLight = 'emerald';
const themeDark = 'dark';
const $html = document.querySelector('html');

const HeaderContainer = () => {
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

  useEffect(() => {
    if (themeLight === localStorage.getItem('theme')) {
      setLight();
      document.querySelector('.js-theme')?.setAttribute('checked', 'checked');
    } else {
      setDark();
    }
  }, []);

  return <Header themeChange={themeChange} />;
};

export default HeaderContainer;
