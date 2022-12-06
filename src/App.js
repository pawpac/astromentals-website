import './App.css';
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
    </div>
  );
}

export default App;
