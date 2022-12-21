import React from 'react'
import { Main } from './components/Main.js'
import { Header } from './components/Header.js'

class App extends React.Component {
  render() {
    return (
      <div className="text-xl">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
