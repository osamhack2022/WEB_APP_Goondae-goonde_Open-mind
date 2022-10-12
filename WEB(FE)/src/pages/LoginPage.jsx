import { Helmet } from 'react-helmet-async';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 로그인</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
export default LoginPage;
