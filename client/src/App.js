import React from 'react'
import MediaQuery from 'react-responsive'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  LocationPage,
  LandingPage,
  SermonsPage,
  Footer,
  AboutPage,
  PageNotFound,
  ContactPage,
  ConsorcioPage
} from './views/desktop'

import { LandingPageMobile, FooterMobile } from './views/mobile'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <MediaQuery minDeviceWidth={1225}>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/lideres' component={AboutPage} />
              <Route exact path='/valores' component={AboutPage} />
              <Route exact path='/nosotros' component={AboutPage} />
              <Route exact path='/creencias' component={AboutPage} />
              <Route exact path='/horario' component={LocationPage} />
              <Route exact path='/sermones' component={SermonsPage} />
              <Route exact path='/visitanos' component={LocationPage} />
              <Route exact path='/direciones' component={LocationPage} />
              <Route exact path='/contactanos' component={ContactPage} />
              <Route component={PageNotFound} />
            </Switch>

            <Footer />
          </Router>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPageMobile} />
              <Route component={PageNotFound} />
            </Switch>

            <FooterMobile />
          </Router>
        </MediaQuery>
      </>
    )
  }
}

export default App
