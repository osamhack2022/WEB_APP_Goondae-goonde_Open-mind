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
function App() {
  return (
    <div className='App h-screen'>
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
        <Route path='/post/@:username'>
          <Route index element={<PostListPage />} />
          <Route path=':postId' element={<PostPage />} />
        </Route>
        <Route path='/map' element={<MapPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
