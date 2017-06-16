import React, { Component } from 'react';
import logo from './img/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 copyright">
              <p>Grability 2017 - Todos los derechos reservados</p>
            </div>
            <div className="col-md-4">
              <img src={logo} className="pull-right" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
