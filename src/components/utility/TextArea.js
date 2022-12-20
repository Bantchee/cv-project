import React from 'react'

export class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onChange, name, placeholder } = this.props;
        return (
            <textarea 
                className="rounded pl-2 border-zinc-600 border-solid border-2"
                onChange={onChange} 
                name={name}
                placeholder={placeholder}
            />
        )
    }
}