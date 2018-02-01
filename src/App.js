import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './component-a/component-a'
import ComponentB from './component-b/component-b'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default App;
