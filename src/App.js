import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

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
      speed: 1.2,
      out_mode: 'out',
    },
  },
};

//API
const app = new Clarifai.App({
  apiKey: 'e9b797b58db340adab6903e70e81259c',
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    // Need to set a new state instesd of using input cause it would show the picture straight away before submission
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(function (response) {
        try {
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      });
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
