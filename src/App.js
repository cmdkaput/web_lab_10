import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import Tile from './components/TilesSection/TilesSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <Tile/>
      <Footer/>
    </div>
  );
}

export default App;
