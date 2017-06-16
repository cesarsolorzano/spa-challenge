import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="characters-content">
          </div>
          <div className="favorites-content">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
