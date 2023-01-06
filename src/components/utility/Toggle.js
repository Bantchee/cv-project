import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Toggle = (props) => {
    const [isLightMode, setIsLightMode] = useState(true);

    const changeTheme = () => {
        let root = document.querySelector('html');

        if (root.classList.contains('dark')) {
            root.classList.remove("dark");
            setIsLightMode(true);
        }
        else {
            root.classList.add("dark");
            setIsLightMode(false);
        }
    };

    return (
        <button onClick={changeTheme} className="fixed top-0 right-0 mr-4 mt-4 rounded-full p-3 pt-4 pb-4 bg-sky-400 hover:bg-sky-500 dark:bg-emerald-400 dark:hover:bg-emerald-500 ">
            <FontAwesomeIcon className=" dark:text-zinc-50 text-zinc-800" icon={isLightMode ? faSun : faMoon} size="2x" fixedWidth/>
        </button>
    );
}