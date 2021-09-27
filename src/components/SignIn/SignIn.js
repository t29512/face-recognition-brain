const SignIn = ({ onRouteChange }) => {
  return (
    // Have to close input tag in JSX
    <div className='shadow-5 br3 ba dark-gray b--black-20 w-100 w-50-m w-25-l mw5 center'>
      <main className='pa4 black-80'>
        <div className='measure'>
          <fieldset id='sign-in' className='ba b--transparent ph0 mh0'>
            <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                className='br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                className='br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <div className=''>
            <input
              className='br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
              type='submit'
              value='Sign in'
              onClick={() => onRouteChange('home')}
            />
          </div>
          <div className='lh-copy mt3'>
            <a
              href='#0'
              className='f6 link dim black db'
              onClick={() => onRouteChange('register')}
            >
              Register
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
