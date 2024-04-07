import HEADER from "./Components/Header";
import "./App.css";
import HERO from "./Components/Hero";
import ABOUT from "./Components/About";
import SERVICES from "./Components/Services";
import SKILLS from "./Components/Skills";
import WORKS from "./Components/works";
import CONTACT from "./Components/Contact";
import FOOTER from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <HEADER />
      <HERO />
      <ABOUT />
      <SERVICES />
      <SKILLS />
      <WORKS />
      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default App;
