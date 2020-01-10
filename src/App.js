import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Components/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Register from './Components/Register/Register'
import LogIn from './Components/LogIn/LogIn'
import GuestHome from './Components/GuestHome/GuestHome'
import Main from './Components/Main/Main'

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
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/guest-home" component={GuestHome} />
            <Route path="/main" component={Main}></Route>
            <Route path="/main" component={Main}></Route>
            <Route path="/main" component={Main}></Route>
            <Route path="/main" component={Main}></Route>
          </Switch>
        </div>
      </Router>
    ); 
  }
}

export default App
