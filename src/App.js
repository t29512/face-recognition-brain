import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
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
      speed: 1,
      out_mode: 'out',
    },
  },
};

//API
/* const Clarifai = process.env.TRAVIS ? require('clarifai') : require('../src'); */

const app = new Clarifai.App({
  apiKey: 'e9b797b58db340adab6903e70e81259c',
});

/* const clarifai = new Clarifai.App({
  apiKey: process.env.e9b797b58db340adab6903e70e81259c,
}); */

function log(d) {
  try {
    console.log(JSON.stringify(d, null, 2));
  } catch (e) {
    console.log(d);
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        'https://samples.clarifai.com/metro-north.jpg'
      )
      .then(log)
      .catch(log);
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
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
