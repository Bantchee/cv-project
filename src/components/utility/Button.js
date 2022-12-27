import React from 'react';

export class Button extends React.Component {
   render() {
        let {value, className, onClick} = this.props
        return (
            <button 
                className={className}
                onClick={(e) => onClick(e)}
            >
                {value}
            </button>
        )
    }
}