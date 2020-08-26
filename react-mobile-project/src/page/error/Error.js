import React, { Component } from 'react'
import './error.scss';
import logo from '../../logo.svg';
class ErrorPage extends Component {
  render (){
    return (
      <div>
        <header className="error-header">
          <img src={logo} className="error-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default ErrorPage;