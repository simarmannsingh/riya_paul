import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() 
{
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route  exact path="/" component={HomePage} />
      </Switch>

    </Router>
  );
}

export default App;
