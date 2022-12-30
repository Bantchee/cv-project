import React from 'react'
import { EditPage } from './components/EditPage.js';
import { PreviewPage } from './components/PreviewPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

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
      education: {
        schools: [
          {
            certification: "",
            school: "",
            city: "",
            state: "",
            from: "",
            to: "",
          },
        ],
      },
    }
  }

  handleInputChange(e, section, index) {
    let key = e.target.name;
    let val = e.target.value;

    if(section === "personal") {
      const personal = JSON.parse(JSON.stringify(this.state.personal));
      personal[key] = val;
      this.setState({
        personal,
      });
    }
    else if(section === "experience"){
      const experience = JSON.parse(JSON.stringify(this.state.experience));
      const careers = experience.careers;
      const career = careers[index];
      career[key] = val;
      this.setState({
        experience,
      });
    }
    else if(section === "education"){
      const education = JSON.parse(JSON.stringify(this.state.education));
      const schools = education.schools;
      const school = schools[index];
      school[key] = val;
      this.setState({
        education,
      });
    }
  }

  // handlePersonalInputChange(e) {
  //   let key = e.target.name;
  //   let val = e.target.value;
  //   const personal = JSON.parse(JSON.stringify(this.state.personal));
  //   personal[key] = val;
  //   this.setState({
  //     personal,
  //   });
  // }

  // Find out which careers index to access
  // then everything is the same as handlePersonalInputChange(e);
  // handleExperienceInputChange(e, index) {
  //   let key = e.target.name;
  //   let val = e.target.value;
  //   const experience = JSON.parse(JSON.stringify(this.state.experience));
  //   const careers = experience.careers;
  //   const career = careers[index];
  //   career[key] = val;
  //   this.setState({
  //     experience,
  //   });
  // }

  deleteOnClick(section, index) {
    if(section === "experience") {
      const experience = JSON.parse(JSON.stringify(this.state.experience));
      const careers = experience.careers;
      careers.splice(index, 1);
      this.setState({
        experience,
      });
    }
    else if (section === "education") {
      const education = JSON.parse(JSON.stringify(this.state.education));
      const schools = education.schools;
      schools.splice(index, 1);
      this.setState({
        education,
      });
    }
  }

  addCareer() {
    console.log('hi');
    const experience = JSON.parse(JSON.stringify(this.state.experience));
    const careers = experience.careers;
    const career = {
      company: "",
      position: "",
      city: "",
      state: "",
      from: "",
      to: "",
    };
    careers.push(career);
    this.setState({
      experience,
    });
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
            handleInputChange={(e, section, index) => this.handleInputChange(e, section, index)}
            deleteOnClick={(section, index) => this.deleteOnClick(section, index)}
            addCareer={() => this.addCareer()}
            personal = {this.state.personal}
            experience = {this.state.experience}
            education={this.state.education}
          />
          <PreviewPage 
            personal = {this.state.personal}
            experience = {this.state.experience}
            education={this.state.education}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
