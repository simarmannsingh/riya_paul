import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Photos from './pages/Photos';
import About from './pages/About';
import Publications from './pages/Publications';

function App() 
{
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/photos" component={Photos} />
        <Route  path="/about" component={About} />
        <Route  path="/publications" component={Publications} />
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
