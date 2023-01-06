import React from "react";
import { Career } from "../utility/edit/Career.js";

export const Experience = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <h1>Work Experience</h1>
            {
                props.experience.careers.map((career, index) => {
                    return (
                        <Career
                            key={index} 
                            onChange={(e) => props.onChange(e, index)}
                            onClick={() => props.deleteOnClick(index)}
                        />
                    )
                })
            }
            <button 
                className="bg-green-500 rounded-md"
                onClick={() => props.addOnClick()}
            >Add</button>
        </div>
    );
}