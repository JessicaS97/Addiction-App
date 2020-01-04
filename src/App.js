import React from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import MainContent from './Components/MainContent/MainContent'

class App extends React.Component {

  render() {
    return (
      <div className="App" style={{height:'100%'}}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    ); 
  }
}

export default App
