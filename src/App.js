import React, { useState } from 'react'
import { EditPage } from './components/EditPage.js';
import { PreviewPage } from './components/PreviewPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

const App = (props) => {
  const [personal, setPersonal] = useState(
    {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      address: "",
      phoneNumber: "",
      description: "",
    }
  );

  const [experience, setExperience] = useState(
    {
      careers: [
        {
          company: "",
          position: "",
          city: "",
          state: "",
          from: "",
          to: "",
          details: "",
        },
      ],
    }
  );

  const [education, setEducation] = useState(
    {
      schools: [
        {
          certification: "",
          school: "",
          city: "",
          state: "",
          from: "",
          to: "",
          details: "",
        },
      ],
    }
  );

  const handleInputChange = (e, section, index) => {
    let key = e.target.name;
    let val = e.target.value;

    if(section === "personal") {
      const per = JSON.parse(JSON.stringify(personal));
      per[key] = val;
      setPersonal(per);
    }
    else if(section === "experience") {
      const exp = JSON.parse(JSON.stringify(experience));
      const careers = exp.careers;
      const career = careers[index];
      career[key] = val;
      setExperience(exp);
    }
    else if(section === "education"){
      const edu = JSON.parse(JSON.stringify(education));
      const schools = edu.schools;
      const school = schools[index];
      school[key] = val;
      setEducation(edu);
    }
  };

  const deleteOnClick = (section, index) => {
    if(section === "experience") {
      const exp = JSON.parse(JSON.stringify(experience));
      const careers = exp.careers;
      careers.splice(index, 1);
      setExperience(exp);
    }
    else if (section === "education") {
      const edu = JSON.parse(JSON.stringify(education));
      const schools = edu.schools;
      schools.splice(index, 1);
      setEducation(edu);
    }
  };

  const addOnClick = (section) => {
    if(section === "experience") {
      const exp = JSON.parse(JSON.stringify(experience));
      const careers = exp.careers;
      const career = {
        company: "",
        position: "",
        city: "",
        state: "",
        from: "",
        to: "",
        details: "",
      };
      careers.push(career);
      setExperience(exp);
    }
    else if(section === "education") {
      const edu = JSON.parse(JSON.stringify(education));
      const schools = edu.schools;
      const school = {
        certification: "",
        school: "",
        city: "",
        state: "",
        from: "",
        to: "",
        details: "",
      };
      schools.push(school);
      setEducation(edu);
    }
  };

  return (
    <div className="text-xl bg-zinc-50 dark:bg-zinc-700 ">
      
      <Header />
      <div className="flex justify-center gap-6 pt-6 pb-6 pl-16 pr-16">
        <EditPage 
          handleInputChange={(e, section, index) => handleInputChange(e, section, index)}
          deleteOnClick={(section, index) => deleteOnClick(section, index)}
          addOnClick={(section) => addOnClick(section)}
          personal = {personal}
          experience = {experience}
          education={education}
        />
        <PreviewPage 
          personal = {personal}
          experience = {experience}
          education={education}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
