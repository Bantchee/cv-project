import React from "react";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTheme(event) {
        let root = document.querySelector('html');

        (root.classList.contains('dark')) ? root.classList.remove("dark") : root.classList.add("dark");
    }

    render() {
        return (
            <button onClick={this.changeTheme} className="fixed top-0 right-0 mr-4 mt-4 bg-sky-400 p-3 hover:bg-sky-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
                    <circle cx="12" cy="12" r="5" className="stroke-zinc-800"></circle>
                    <line x1="12" y1="1" x2="12" y2="3" className="stroke-zinc-800"></line>
                    <line x1="12" y1="21" x2="12" y2="23" className="stroke-zinc-800"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" className="stroke-zinc-800"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" className="stroke-zinc-800"></line>
                    <line x1="1" y1="12" x2="3" y2="12" className="stroke-zinc-800"></line>
                    <line x1="21" y1="12" x2="23" y2="12" className="stroke-zinc-800"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" className="stroke-zinc-800"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" className="stroke-zinc-800"></line>
                </svg>
            </button>
        );
    }
}