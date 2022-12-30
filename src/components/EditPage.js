import React from 'react';
import { Personal } from './editSections/Personal.js';
import { Experience } from './editSections/Experience.js'
import { Education } from './editSections/Education.js';

export class EditPage extends React.Component {
    render() {
        // console.log(this.props.addCareer())
        return (
            <div className='flex-1 p-6 bg-zinc-200 text-zinc-900 dark:bg-zinc-600 dark:text-zinc-50 rounded-lg'>
                
                <Personal 
                    onChange={(e) => this.props.handleInputChange(e, "personal", null)}
                    personal = {this.props.personal}
                />
                <Experience 
                    onChange={(e, index) => this.props.handleInputChange(e, "experience", index)}
                    deleteCareer={this.props.deleteCareer}
                    addCareer={this.props.addCareer}
                    experience={this.props.experience}
                />
                <Education 
                    onChange={(e, index) => this.props.handleInputChange(e, "education", index)}
                    // deleteCareer={this.props.deleteCareer}
                    // addCareer={this.props.addCareer}
                    education={this.props.education}
                />
            </div>
        )
    }
}