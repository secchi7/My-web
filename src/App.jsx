import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import LangueSelector from "./components/LangueSelector";

function App() {
  return (
    <div className="bg-slate-200">
      <LangueSelector />
      <Sidenav />
      <Main />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
