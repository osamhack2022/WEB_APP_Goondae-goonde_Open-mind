import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/Mainpage';
import MyPage from './pages/MyPage';
import RegisterPage from './pages/RegisterPage';
import PlacePage from './pages/PlacePage';
import MapPage from './pages/MapPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import { useRef } from 'react';
import DrawerContainer from './containers/common/DrawerContainer';
import EmailConfirmPage from './pages/EmailConfirmPage';
import NotFoundPage from './pages/NotFoundPage';
import MOUIndexPage from './pages/MOUIndexPage';
import TMOIndexPage from './pages/TMOIndexPage';

function App() {
  const $hamburger = useRef(null);
  const $pages = useRef(null);
  const closeOverlay = () => {
    $hamburger.current.click();
  };
  return (
    <div className='App h-screen drawer'>
      <input
        type='checkbox'
        id='side-menu'
        className='drawer-toggle'
        ref={$hamburger}
      />
      <section className='drawer-content relative ' id='scrollbar' ref={$pages}>
        <Helmet>
          <title>OPEN MIND</title>
        </Helmet>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/index'>
            <Route index element={<IndexPage />} />
            <Route path=':placeId' element={<PlacePage />} />
          </Route>
          <Route path='/posts'>
            <Route index element={<PostListPage />} />
            <Route path='write' element={<WritePage />} />
          </Route>
          <Route path='/posts/@:username'>
            <Route index element={<PostListPage />} />
            <Route path=':postId' element={<PostPage />} />
          </Route>
          <Route path='/map' element={<MapPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/emailConfirm' element={<EmailConfirmPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/MOUIndex' element={<MOUIndexPage />} />
          <Route path='/TMOIndex' element={<TMOIndexPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </section>
      <DrawerContainer closeOverlay={closeOverlay} />
    </div>
  );
}

export default App;
