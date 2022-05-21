import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link }
  from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap"
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'
function App() {
  return (
<Router>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Toggle className="coloring" />
          <Container>
            <Navbar.Collapse>
              <Navbar.Brand as={Link} to="./Home" className='logo'> 
                <img src={logo} alt="LOGO" className='img'/>{' '}
              </Navbar.Brand>
              <Nav className="ms-auto">
                  <Nav.Link as={Link} to="./Home">Home</Nav.Link>
                  <Nav.Link as={Link} to="./About">About</Nav.Link>
                  <Nav.Link as={Link} to="./Services">Services</Nav.Link>
                  <Nav.Link as={Link} to="./Products">Products</Nav.Link>
                  <Nav.Link as={Link} to="./Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>

            <br />
      </>
      <div>
      <Switch>
        
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;