import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    document.getElementById('scrollbar').scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

export default ScrollToTop;
