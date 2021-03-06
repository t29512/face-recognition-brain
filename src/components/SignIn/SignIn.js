import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  //Fetch by default does a GET request
  onSubmitSignIn = () => {
    fetch('https://face-recogni-brain.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          console.log('Failed to sign in');
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
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
                  required
                  onChange={this.onEmailChange}
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
                  required
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
                onClick={() => this.onSubmitSignIn()}
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
  }
}

export default SignIn;
