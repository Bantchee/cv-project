import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="dark:bg-zinc-50 bg-zinc-700 flex text-sky-500  dark:text-emerald-500  h-28 items-center justify-center text-4xl">
                <p>Made By</p>
                <a className="hover:text-sky-600 dark:hover:text-emerald-600 bg-sky-200 hover:bg-sky-300 dark:bg-emerald-200 dark:hover:bg-emerald-300 border-sky-500 hover:border-sky-600 dark:border-emerald-500 dark:hover:border-emerald-600 rounded-full p-2 border-4 ml-2 mr-2" href="https://github.com/Bantchee">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <p>J. Steven Jarrett</p>
            </footer>
        )
    }
}