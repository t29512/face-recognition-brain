const Register = ({ onRouteChange }) => {
  return (
    <article className='shadow-5 br3 ba dark-gray b--black-20 w-100 w-50-m w-25-l mw5 center'>
      <main className='pa4 black-80'>
        <div className='measure'>
          <fieldset id='Register' className='ba b--transparent ph0 mh0'>
            <legend className='f2 fw6 ph0 mh0'>Register</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='name'>
                Name
              </label>
              <input
                className='br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='text'
                name='name'
                id='name'
              />
            </div>
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
              value='Submit'
              onClick={() => onRouteChange('home')}
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
