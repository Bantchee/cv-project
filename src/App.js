import React from 'react'
import { EditPage } from './components/EditPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

class App extends React.Component {
  render() {
    return (
      <div className="text-xl bg-zinc-50 dark:bg-zinc-700 h-screen flex flex-col justify-between">
        <Header />
        <EditPage />
        <Footer />
      </div>
    )
  }
}

export default App;
