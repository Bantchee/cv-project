import React from 'react'

export class Input extends React.Component {
    shouldComponentUpdate = () => false;
    render() {
        let { onChange, type, name, placeholder, value} = this.props;
        return (
            <input 
                className="rounded pl-2 border-zinc-600 border-solid border-2"
                onChange={onChange} 
                type={type}
                name={name}
                placeholder={placeholder}
                // value={value}
            />
        )
    }
}