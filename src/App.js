
import './App.css';
import Particle from './components/Particles/Particle';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <Particle className= 'particles'/>

      {/*
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
