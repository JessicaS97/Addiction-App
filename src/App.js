import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Footer'
import MainContent from './Components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    ); 
  }
}

export default App
