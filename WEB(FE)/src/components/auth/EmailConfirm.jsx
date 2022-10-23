import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-auto
`;

const FormBlock = tw.div`
w-full max-w-md space-y-8 border-4 rounded-xl p-20 border-green-600 
`;
const EmailConfirm = () => {
  return (
    <>
      <Wrapper>
        <FormBlock>
          <p className='text-center text-3xl font-bold tracking-tight'>
            이메일을 확인하세요
          </p>
          <Link to={'/'}>
            <span className='block mx-auto text-center cursor-pointer mt-5 text-gray-400 border-b-2  hover:text-black transition-colors transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);'>
              홈으로 가기
            </span>
          </Link>
        </FormBlock>
      </Wrapper>
    </>
  );
};

export default EmailConfirm;
