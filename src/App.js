import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ComponentLifeCycle from './component-lifecycle/component-lifecycle'
import ComponentB from './component-b/component-b'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First Project</h1>
          <a className="nav" href="/">home</a>
          <a className="nav" href="/component-lifecycle">Component Lifecycle</a> 
        </header>
        <Switch>
          <Route exact path='/' component={ComponentB} />
          <Route exact path='/component-lifecycle' component={ComponentLifeCycle} />
        </Switch>
      </div>
    );
  }
}

export default App;
