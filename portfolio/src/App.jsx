import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import './app.scss';

function App() {
  return <div className='app'>
    <Topbar/>
    < div className='sections'>
      <Intro/>
      <Works/>
      <Portfolio/>
      <Contact/>
    </div>
  </div>;
}

export default App;
