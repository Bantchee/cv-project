import React from 'react'

export class TextArea extends React.Component {
    render() {
        let { onChange, name, placeholder, value } = this.props;
        return (
            <textarea 
                className="rounded pl-2 border-zinc-600 border-solid border-2 dark:border-zinc-200 dark:bg-zinc-800 dark:text-zinc-50"
                onChange={onChange} 
                name={name}
                placeholder={placeholder}
                // value={value}
            />
        )
    }
}