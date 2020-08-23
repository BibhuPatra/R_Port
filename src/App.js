import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/Service" component = {Service}/>
      <Route exact path = "/Contact" component = {Contact}/>
      <Route exact path = "/About" component = {About}/>
      <Redirect to = "/" />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
