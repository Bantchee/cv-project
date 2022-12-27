import React from 'react';

export class Button extends React.Component {
   render() {
        let {value, className} = this.props
        return (
            <button className={className}>
                {value}
            </button>
        )
    }
}