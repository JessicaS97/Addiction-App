import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LandingPage from './Components/LandingPage/LandingPage'
import Register from './Components/Register/Register'
import LogIn from './Components/LogIn/LogIn'
import GuestHome from './Components/GuestHome/GuestHome'
import Community from './Components/Community/Community'
import Motivation from './Components/Motivation/Motivation'
import Support from './Components/Support/Support'
import AddictionForm from './Components/AddictionForm/AddictionForm'


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
            <Route path="/guest-community" component={Community} />
            <Route path="/guest-support" component={Support} />
            <Route path="/guest-motivation" component={Motivation} />
            <Route path="/new-addiction" component={AddictionForm}></Route>
          </Switch>
        </div>
      </Router>
    ); 
  }
}

export default App
