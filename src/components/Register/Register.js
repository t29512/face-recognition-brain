import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  //Fetch by default does a GET request
  onSubmitRegister = () => {
    const { name, email, password } = this.state;
    // if (name.length < 2 || name.length > 8) {
    //   return window.alert('Your name must between 2 - 8 characters');
    // }
    // if (email === /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) {
    //   return window.alert('Invalid email address');
    // }
    fetch('https://face-recogni-brain.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          console.log('Failed to load user');
        }
      });
  };

  render() {
    return (
      <div className='shadow-5 br3 ba dark-gray b--black-20 w-100 w-50-m w-25-l mw5 center'>
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
                  required
                  onChange={this.onNameChange}
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
                value='Submit'
                onClick={() => this.onSubmitRegister()}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Register;
