import HEADER from './Components/Header';
import './App.css';
import HERO from './Components/Hero';
import ABOUT from './Components/About';
import SERVICES from './Components/Services';
function App() {
  return (
    <div className="App">
      <HEADER />
      <HERO /> 
      <ABOUT />
      <SERVICES />
    </div>
  );
}

export default App;
