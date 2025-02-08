import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import ProposalButton from './components/ProposalButton';
import MemoryGallery from './components/MemoryGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>CodeWithAswin</h1> */}
      <Hero />
      <LoveLetter />
      <ProposalButton />
      <MemoryGallery />
      <Footer />
    </div>
  );
}

export default App;