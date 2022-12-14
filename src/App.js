import './App.css';
import Moonapp from './components/Moonapp';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Gear from './components/Gear';
import Fiverule from './components/Fiverule';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Gear />
      <Fiverule />
      <Moonapp />
    </div>
  );
}

export default App;
