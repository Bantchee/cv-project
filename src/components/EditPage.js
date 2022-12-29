import React from 'react';
import { Personal } from './editSections/Personal.js';
import { Experience } from './editSections/Experience.js'

export class EditPage extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Personal 
                    onChange={this.props.handlePersonalInputChange}
                    personal = {this.props.personal}
                />
                <Experience 
                    onChange={this.props.handleExperenceInputChange}
                    experience={this.props.experience}
                 />
            </div>
        )
    }
}