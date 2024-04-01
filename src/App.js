import HEADER from './Components/Header';
import './App.css';
import HERO from './Components/Hero';
import ABOUT from './Components/About';
import SERVICES from './Components/Services';
import SKILLS from './Components/Skills';
function App() {
  return (
    <div className="App">
      <HEADER />
      <HERO /> 
      <ABOUT />
      <SERVICES />
      <SKILLS />
    </div>
  );
}

export default App;
