import { Helmet } from 'react-helmet-async';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>군대군데 - 로그인</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
export default LoginPage;
