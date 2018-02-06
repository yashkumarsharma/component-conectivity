import React, { Component } from 'react';
import './App.css';
import ComponentLifeCycle from './component-lifecycle/component-lifecycle'
import ComponentB from './component-b/component-b'

class App extends Component {
  updateProps = () => {
    this.yash = 'yash'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
        <ComponentLifeCycle divya="beautiful" />
        <br />
        <ComponentB />
      </div>
    );
  }
}

export default App;
