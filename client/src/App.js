import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ContactPage, SermonsPage } from './views/desktop'

import { LandingMobile, FooterMobile, PageNotFoundMobile, LocationMobile, AboutMobile } from './views/mobile'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentHeight: '',
      currentWidth: ''
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    this.setState({ currentWidth: window.innerWidth, currentHeight: window.innerHeight })
  }

  render() {
    return (
      <>
        {/* <MediaQuery minDeviceWidth={1225}>
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
        </MediaQuery> */}
        {/* <MediaQuery maxDeviceWidth={1224}> */}
        <Router>
          <Switch>
            <Route exact path='/' component={LandingMobile} />
            <Route exact path='/lideres' component={AboutMobile} />
            <Route exact path='/valores' component={AboutMobile} />
            <Route exact path='/nosotros' component={AboutMobile} />
            <Route exact path='/sermones' component={SermonsPage} />
            <Route exact path='/creencias' component={AboutMobile} />
            <Route exact path='/horario' component={LocationMobile} />
            <Route exact path='/contactanos' component={ContactPage} />
            <Route exact path='/visitanos' component={LocationMobile} />
            <Route exact path='/direciones' component={LocationMobile} />
            <Route component={PageNotFoundMobile} />
          </Switch>

          <FooterMobile />
        </Router>
        {/* </MediaQuery> */}
      </>
    )
  }
}

export default App
