import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/work' component={Work} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
