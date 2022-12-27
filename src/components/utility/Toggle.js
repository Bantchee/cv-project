import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLight: true,
        }

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        let root = document.querySelector('html');

        if (root.classList.contains('dark')) {
            root.classList.remove("dark")
            this.setState({
                isLight: true,
            });
        }
        else {
            root.classList.add("dark");
            this.setState({
                isLight: false,
            });
        }
    }

    render() {
        console.log(this.state.isLight, "sdfasd");
        return (
            <button onClick={this.changeTheme} className="fixed top-0 right-0 mr-4 mt-4 rounded-full p-3 pt-4 pb-4 bg-sky-400 hover:bg-sky-500 dark:bg-emerald-400 dark:hover:bg-emerald-500 ">
                <FontAwesomeIcon className=" dark:text-zinc-50 text-zinc-800" icon={(this.state.isLight) ? faSun : faMoon} size="2x" fixedWidth/>
            </button>
        );
    }
}