import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ml6 mt0'>
      <Tilt
        className='Tilt'
        options={{ max: 32 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner'>
          <img src={brain} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
