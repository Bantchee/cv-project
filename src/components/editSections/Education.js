import React from "react";
import { School } from "../utility/edit/School";

export const Education = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <h1>Education</h1>
            {
                props.education.schools.map((school, index) => {
                    return (
                        <School
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