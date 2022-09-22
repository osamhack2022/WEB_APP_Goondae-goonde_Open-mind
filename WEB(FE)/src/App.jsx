import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Mainpage from './pages/Mainpage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <div className='App h-screen'>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
