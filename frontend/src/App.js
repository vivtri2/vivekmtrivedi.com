import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work2 from './components/Work2';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="flex justify-center py-2">
        <VisitorCounter />
      </div>
      <Home />
      <About />
      <Skills />
      <Work2 />
      <Contact />
    </div>
  );
}

export default App;