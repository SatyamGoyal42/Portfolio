
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

function App() {
  return (
   <div className='App'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
   </div>
  );
}

export default App;
