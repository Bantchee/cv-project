import React from 'react';
import { Toggle } from './utility/Toggle.js'

export class Header extends React.Component {
    render() {
        return (
            <div className='flex justify-center relative pt-4 pb-4'>
                <div className='flex content-center justify-center gap-2'>
                    <svg className="text-zinc-800 dark:text-zinc-50" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                        <h1 className='text-4xl text-zinc-800 dark:text-zinc-50'>CV App</h1>
                </div>
                <Toggle />
            </div>
        )
    }
}