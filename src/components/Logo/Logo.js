import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <Tilt
      className='center mb4'
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={400}
      scale={1.2}
      gyroscope={true}
      style={{ height: 150, width: 150 }}
    >
      <div style={{ height: '150px' }}>
        <img src={brain} alt='logo' width='150px' />
      </div>
    </Tilt>
  );
};

export default Logo;
