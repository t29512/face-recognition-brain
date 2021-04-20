import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: 'B8B2C6',
    },
    size: {
      anim: {
        enable: true,
        speed: 10,
      },
      value: 100,
      random: true,
    },
    shape: {
      type: 'edge',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 1,
      out_mode: 'out',
    },
  },
};

function App() {
  return (
    <div className='App'>
      <Particles className='particles' params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
