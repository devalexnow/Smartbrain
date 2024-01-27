import React, {Component} from 'react';
import './App.css';
import Particle from './components/Particles/Particle';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const MODEL_ID = 'face-detection';

const returnClarifayRequestOptions = (imageUrl) => {
  const PAT = '776f168ee0b7468f8e3f0d2977657931';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'alexnowdev';
  const APP_ID = 'face-detection-smartbrain';
  // Change these to whatever model and image URL you want to use
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                    // "base64": IMAGE_BYTES_STRING
                }
            }
        }
    ]
});

const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};

return requestOptions
}



class App extends Component {
 constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: '',
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifayRequestOptions(this.state.input))
    .then(response => response.json())
    .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))

      // console.log(result
      //   .outputs[0].data.regions[0].region_info.bounding_box)

      // const regions = result.outputs[0].data.regions;

      //   regions.forEach(region => {
      //       // Accessing and rounding the bounding box values
      //       const boundingBox = region.region_info.bounding_box;
      //       const topRow = boundingBox.top_row.toFixed(3);
      //       const leftCol = boundingBox.left_col.toFixed(3);
      //       const bottomRow = boundingBox.bottom_row.toFixed(3);
      //       const rightCol = boundingBox.right_col.toFixed(3);

      //       region.data.concepts.forEach(concept => {
      //           // Accessing and rounding the concept value
      //           const name = concept.name;
      //           const value = concept.value.toFixed(4);

      //           console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
                
      //       });
      //   });

   

  .catch(error => console.log('error', error));
}

onRouteChange = () => {
  this.setState({route: 'home'});
}

  render(){
    return (
      <div className="App">
        <Particle className= 'particles'/>  
        <Navigation />
        { this.state.route === 'signin'
          ?  <Signin onRouteChange={this.onRouteChange}/>
          : <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition 
              box={this.state.box} 
              imageUrl={this.state.imageUrl} />
            </div>
        }
       
        
      </div>
    );
  }
}

export default App;
