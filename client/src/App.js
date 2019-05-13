import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LocationPage, LandingPage, SermonsPage, Footer, AboutPage, PageNotFound, ContactPage } from './views/desktop'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/visitanos' component={LocationPage} />
          <Route exact path='/sermones' component={SermonsPage} />
          <Route exact path='/nosotros' component={AboutPage} />
          <Route exact path='/contactanos' component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </Router>
    )
  }
}

export default App
