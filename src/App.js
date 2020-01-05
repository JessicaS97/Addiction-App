import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Header from './Components/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Register from './Components/Register/Register'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App" style={{height:'100%'}}>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" component={Register}/>
          </Switch>
      </div>
      </Router>
    ); 
  }
}

export default App
