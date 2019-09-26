import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import ComponentLifeCycle from './component-lifecycle/component-lifecycle'
import ComponentB from './component-b/component-b'
import Application from './application/application'
import DesignComponent from './design-component/design-component'

let __DEV__
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  __DEV__ = true
} else {
  __DEV__ = false
}

const BASEROUTENAME = __DEV__ ? '' : '/component-conectivity'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={BASEROUTENAME}/>
        <header className="App-header">
          <h1 className="App-title">First Project</h1>
          <a className="nav" href={`${BASEROUTENAME}/`}>home</a>
          <a className="nav" href={`${BASEROUTENAME}/component-lifecycle`}>Component Lifecycle</a> 
          <a className="nav" href={`${BASEROUTENAME}/application`}>Application</a>
          <a className="nav" href={`${BASEROUTENAME}/design-component`}>Design Component</a>
        </header>
        <Switch>
          <Route exact path={`${BASEROUTENAME}/`} component={ComponentB} />
          <Route exact path={`${BASEROUTENAME}/component-lifecycle`} component={ComponentLifeCycle} />
          <Route exact path={`${BASEROUTENAME}/application`} component={Application} />
          <Route exact path={`${BASEROUTENAME}/design-component`} component={DesignComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
