import React from 'react';
import { Personal } from './sections/Personal.js'

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Personal />
            </div>
        )
    }
}