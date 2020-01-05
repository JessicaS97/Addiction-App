import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Header from './Components/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Register from './Components/Register/Register'
import LogIn from './Components/LogIn/LogIn'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App" style={{height:'100%'}}>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={LogIn}/>
          </Switch>
      </div>
      </Router>
    ); 
  }
}

export default App
