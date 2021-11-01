import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      value: 50,
    },
    shape: {
      type: 'square',
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

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  // Where we are on the page
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joinTime: '',
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joinTime: data.joinTime,
      },
    });
  };

  // Multiple Faceboxes Display in process
  // calculateFacePositoin = (data) => {
  //   let box = [];
  //   for (let i = 0; i < data.outputs[0].data.regions.length; i++) {
  //     let clarifaiFace =
  //       data.outputs[0].data.regions[i].region_info.bounding_box;
  //     const image = document.getElementById('inputImage');
  //     const width = image.width;
  //     const height = image.height;
  //     box.push({
  //       leftCol: width * clarifaiFace.left_col,
  //       topRow: height * clarifaiFace.top_row,
  //       rightCol: width - clarifaiFace.right_col * width,
  //       bottomRow: height - clarifaiFace.bottom_row * height,
  //     });
  //   }
  //   console.log(box);
  //   return box;
  // };

  calculateFacePositoin = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = image.width;
    const height = image.height;
    return {
      leftCol: width * clarifaiFace.left_col,
      topRow: height * clarifaiFace.top_row,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  onPictureSubmit = () => {
    // Need to set a new state instesd of using input cause it would show the picture straight away before submission
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.displayFaceBox(this.calculateFacePositoin(response));
        //Send a put request to get the user entry count then update the state
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { imageUrl, box, isSignedIn, route } = this.state;
    const { name, entries } = this.state.user;
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions} />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        ) : route === 'register' ? (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        ) : (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        )}
      </div>
    );
  }
}

export default App;
