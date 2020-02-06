import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Login from './pages/login'
import Timeline from './pages/TimeLine'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/TimeLine" component={Timeline} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;

// Parei 00:24:28