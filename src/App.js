import React from 'react'
import { EditPage } from './components/EditPage.js';
import { PreviewPage } from './components/PreviewPage'
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        address: "",
        phoneNumber: "",
        description: "",
      },
    }
  }

  handleInputChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val,
    });
  }

  render() {
    return (
      <div className="text-xl bg-zinc-50 dark:bg-zinc-700 h-screen flex flex-col justify-between">
        <Header />
        <EditPage onChange={(e) => this.handleInputChange(e)} />
        <PreviewPage 
          firstName={this.state.firstName} 
          lastName={this.state.lastName} 
          role={this.state.role} 
          email={this.state.email} 
          address={this.state.address} 
          phoneNumber={this.state.phoneNumber}
          description={this.state.description}  
        />
        <Footer />
      </div>
    )
  }
}

export default App;
