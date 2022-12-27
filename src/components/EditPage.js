import React from 'react';
import { Personal } from './sections/Personal.js'
import { Button } from './utility/Button.js';

export class EditPage extends React.Component {
    render() {
        return (
            <div className="bg-zinc-200 mx-32">
                <Button value="Edit" className="w-24 text-zinc-800 bg-sky-500"/>
                <Button value="Preview" className="w-24 text-zinc-800 bg-sky-400" />
                <Personal onChange={this.props.onChange}/>
            </div>
        )
    }
}