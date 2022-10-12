import { Helmet } from 'react-helmet-async';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>OPEN MIND - 회원가입</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};
export default RegisterPage;
