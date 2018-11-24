import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';

import Routes from './routes/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Logo from './components/template/logo/logo';
import Nav from './components/template/nav/nav';
import Footer from './components/template/footer/footer';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Logo />
          <Nav />
          <Routes />
          <Footer />
        </div>
      </HashRouter>

    );
  }
}

export default App;
