import React from 'react';
import { Personal } from './editSections/Personal.js';
import { Experience } from './editSections/Experience.js'
import { Education } from './editSections/Education.js';

export class EditPage extends React.Component {
    render() {
        // console.log(this.props.addCareer())
        return (
            <div className='flex-1 p-6 bg-zinc-200 text-zinc-900 dark:bg-zinc-600 dark:text-zinc-50'>
                
                <Personal 
                    onChange={this.props.handlePersonalInputChange}
                    personal = {this.props.personal}
                />
                <Experience 
                    onChange={this.props.handleExperienceInputChange}
                    deleteCareer={this.props.deleteCareer}
                    addCareer={this.props.addCareer}
                    experience={this.props.experience}
                />
                <Education />
            </div>
        )
    }
}