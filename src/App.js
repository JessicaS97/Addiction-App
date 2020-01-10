import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Header from './Components/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Register from './Components/Register/Register'
import LogIn from './Components/LogIn/LogIn'
import GuestHome from './Components/GuestHome/GuestHome'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <Router>
        <div className="App" style={{height:'100%'}}>
            <Route path="/" exact component={Header} />
            <Route path="/guest-home" component={GuestHome} />
            <Route path="/register" component={Header}/>
            <Route path="/login" component={Header}/>
        </div>
      </Router>
    ); 
  }
}

export default App
