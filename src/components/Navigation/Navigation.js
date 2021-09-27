const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className='f4 link dim black pa4 pointer'
          onClick={() => onRouteChange('signout')}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className='f4 link dim black pa4 pointer'
          onClick={() => onRouteChange('signin')}
        >
          Sign In
        </p>
        <p
          className='f4 link dim black pa4 pointer'
          onClick={() => onRouteChange('register')}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
