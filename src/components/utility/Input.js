import React from 'react'

export const Input = (props) => {
    let { onChange, type, name, placeholder, value} = props;
    return (
        <input 
            className="rounded pl-2 border-solid border-2 border-zinc-600 dark:border-zinc-200 dark:bg-zinc-800 dark:text-zinc-50"
            onChange={onChange} 
            type={type}
            name={name}
            placeholder={placeholder}
            // value={value}
        />
    )
}