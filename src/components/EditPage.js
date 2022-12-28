import React from 'react';
import { Personal } from './sections/Personal.js'

export class EditPage extends React.Component {
    render() {
        return (
            <div>
                <Personal 
                    onChange={this.props.onChange}
                    personal = {this.props.personal}
                />
            </div>
        )
    }
}