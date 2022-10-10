import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-auto
`;
const AuthFormBlock = tw.div`
w-full max-w-md space-y-8
`;

const Form = tw.form`
mt-8 space-y-6
`;

const StyledInputStart = tw.input`
relative block mb-1 w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm
`;
const StyledInput = tw.input`
relative block mb-1 w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm`;

const StyledInputEnd = tw.input`
relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm`;

const Button = tw.button`
group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  console.log(error, 'authform');
  const text = textMap[type];
  return (
    <Wrapper>
      <AuthFormBlock>
        <div>
          <h2 className=' mt-6 text-center text-3xl font-bold tracking-tight'>
            {text}
          </h2>
        </div>
        <Form onSubmit={onSubmit} action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='username' className='sr-only'>
                username
              </label>
              <StyledInputStart
                id='username'
                name='username'
                autoComplete='username'
                required
                placeholder='username'
                onChange={onChange}
                value={form.username}
              />
            </div>
            {type === 'login' && (
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <StyledInputEnd
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  placeholder='Password'
                  onChange={onChange}
                  value={form.password}
                />
              </div>
            )}
            {type === 'register' && (
              <>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <StyledInput
                    id='password1'
                    name='password1'
                    type='password'
                    autoComplete='current-password'
                    required
                    placeholder='Password'
                    onChange={onChange}
                    value={form.password}
                  />
                </div>
                <div>
                  <label htmlFor='password-confirm' className='sr-only'>
                    Password
                  </label>
                  <StyledInput
                    id='password2'
                    name='password2'
                    type='password'
                    autoComplete='current-password'
                    required
                    placeholder='Password Confirm'
                    onChange={onChange}
                    value={form.passwordConfirm}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    EMAIL
                  </label>
                  <StyledInputEnd
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    placeholder='Email'
                    onChange={onChange}
                    value={form.email}
                  />
                </div>
              </>
            )}
          </div>
          <span className='text-red-600'>{error}</span>

          <div className='flex items-center justify-between'>
            {type === 'login' && (
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm'>
                  Remember me
                </label>
              </div>
            )}

            {type === 'login' && (
              <div className='text-sm'>
                <Link
                  to='/register'
                  className='font-medium text-emerald-600 hover:text-emerald-500'
                >
                  회원가입하기
                </Link>
              </div>
            )}
          </div>

          <div>
            {type === 'login' ? (
              <Button type='submit'>
                <span className=' absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-emerald-500 group-hover:text-emerald-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Sign In
              </Button>
            ) : (
              <Button type='submit'>
                <span className=' absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-emerald-500 group-hover:text-emerald-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                REGISTER
              </Button>
            )}
          </div>
        </Form>
      </AuthFormBlock>
    </Wrapper>
  );
};
export default AuthForm;
