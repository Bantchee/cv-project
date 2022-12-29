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
      experience: {
        careers: [
          {
            company: "",
            position: "",
            city: "",
            state: "",
            from: "",
            to: "",
          },
        ],
      },
    }
  }

  handlePersonalInputChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    const personal = JSON.parse(JSON.stringify(this.state.personal));
    personal[key] = val;
    this.setState({
      personal: {},
    });
  }

  // Find out which careers index to access
  // then everything is the same as handlePersonalInputChange(e);
  handleExperienceInputChange(e, index) {
    let key = e.target.name;
    let val = e.target.value;
    const experience = JSON.parse(JSON.stringify(this.state.experience));
    const careers = experience.careers;
    const career = careers[index];
    
    console.log(career);

    // career[key] = val;
    // this.setState({
    //   personal,
    // });
  }

  handleButtonClick(e) {
    this.setState({
      isEditPage: !this.state.isEditPage,
    });
  }

  render() {
    return (
      <div className="text-xl bg-zinc-50 dark:bg-zinc-700 ">
        <Header />
        <div className="flex justify-center gap-6 p-6">
          {/* {(this.state.isEditPage) ? 
            <Button value="Edit" className="w-24 mb-3 rounded-md text-zinc-900 bg-sky-500 hover:bg-sky-400 dark:text-zinc-50 dark:bg-emerald-500 dark:hover:bg-emerald-400" onClick={(e) => {this.handleButtonClick(e)}}/> :
            <Button value="Preview" className="w-24 text-zinc-800 bg-sky-400" onClick={(e) => {this.handleButtonClick(e)}}/>
          } */}
          

          <EditPage 
            handlePersonalInputChange={(e) => this.handlePersonalInputChange(e)}
            handleExperienceInputChange={(e, index) => this.handleExperienceInputChange(e, index)}
            personal = {this.state.personal}
            experience = {this.state.experience}
          />
          <PreviewPage 
            firstName={this.state.personal.firstName} 
            lastName={this.state.personal.lastName} 
            role={this.state.personal.role} 
            email={this.state.personal.email} 
            address={this.state.personal.address} 
            phoneNumber={this.state.personal.phoneNumber}
            description={this.state.personal.description}  
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
