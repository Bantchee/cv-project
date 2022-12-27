import React from 'react'
import { EditPage } from './components/EditPage.js';
import { PreviewPage } from './components/PreviewPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Button } from './components/utility/Button.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditPage: true,
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
    const personal = JSON.parse(JSON.stringify(this.state.personal));
    personal[key] = val;
    this.setState({
      personal,
    });
  }

  handleButtonClick(e) {
    console.log("hi");
    this.setState({
      isEditPage: !this.state.isEditPage,
    });
  }

  render() {
    return (
      <div className="text-xl bg-zinc-50 dark:bg-zinc-700 h-screen flex flex-col justify-between">
        <Header />
        <div>
          {(this.state.isEditPage) ? 
            <Button value="Edit" className="w-24 text-zinc-800 bg-sky-500" onClick={(e) => {this.handleButtonClick(e)}}/> :
            <Button value="Preview" className="w-24 text-zinc-800 bg-sky-400" onClick={(e) => {this.handleButtonClick(e)}}/>
          }
          

          {(this.state.isEditPage) ?
            <EditPage 
              onChange={(e) => this.handleInputChange(e)} 
              personal = {this.state.personal}
            /> :
            <PreviewPage 
              firstName={this.state.personal.firstName} 
              lastName={this.state.personal.lastName} 
              role={this.state.personal.role} 
              email={this.state.personal.email} 
              address={this.state.personal.address} 
              phoneNumber={this.state.personal.phoneNumber}
              description={this.state.personal.description}  
            />
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
