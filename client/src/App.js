import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LandingPage, Footer, PageNotFound, LocationPage, AboutPage, ContactPage, SermonsPage } from './views/'

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
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/lideres' component={AboutPage} />
            <Route exact path='/valores' component={AboutPage} />
            <Route exact path='/nosotros' component={AboutPage} />
            <Route exact path='/sermones' component={SermonsPage} />
            <Route exact path='/creencias' component={AboutPage} />
            <Route exact path='/horario' component={LocationPage} />
            <Route exact path='/contactanos' component={ContactPage} />
            <Route exact path='/visitanos' component={LocationPage} />
            <Route exact path='/direciones' component={LocationPage} />
            <Route component={PageNotFound} />
          </Switch>

          <Footer />
        </Router>
      </>
    )
  }
}

export default App
