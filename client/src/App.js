import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LocationPage, LandingPage, SermonsPage, AboutUs } from './views'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/direciones' component={LocationPage} />
            <Route exact path='/sermones' component={SermonsPage} />
            <Route component={LandingPage} />
          </Switch>

          <AboutUs />
        </div>
      </Router>
    )
  }
}

export default App
