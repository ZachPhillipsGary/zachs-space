import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import logo from './planets.svg';
import ButtonBar from './buttonbar.js'
import './App.css';

// FontAwesome imports
library.add(faEnvelope);
library.add(faFile);
library.add(faCodeBranch);



const IconsAttr = () => { return ( <a href='https://dryicons.com/free-icons/planets'> Icon by Dryicons </a> ); };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Zach Phillips-Gary</h1>
          <strong className="App-title">Full Stack Developer</strong>
        </header>
        <ButtonBar/> 
        <IconsAttr/>
      </div>
    );
  }
}

export default App;
