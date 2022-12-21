import React from 'react'
import { Main } from './components/Main.js'
import { Header } from './components/Header.js'

class App extends React.Component {
  render() {
    return (
      <div className="text-xl bg-zinc-50 dark:bg-zinc-700">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
