import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
