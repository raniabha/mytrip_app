import React from 'react'
import { Route, Switch} from "react-router-dom";
import About from './Component/about/About';
import Home from './Component/home/Home';
import Login from './Component/login/Login';
import Register from './Component/register/Register';
import Package from './Component/package/Package';
import { Navbar, Nav,} from 'react-bootstrap';
// import './App.css';

function App() {
  return (
    <Route>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">MyTRip</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/package">Trip Packages</Nav.Link>
            <Nav.Link href="/about">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path ="/about" component={About}/>
          <Route path ="/login" component={Login}/>
          <Route path ="/register" component={Register}/>
          <Route path ="/package" component={Package}/>
      </Switch>
    </Route>
  );
}
export default App;
