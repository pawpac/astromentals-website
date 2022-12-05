import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Gear from './components/Gear';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Gear />
    </div>
  );
}

export default App;
