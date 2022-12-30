import React from "react";
import { School } from "../utility/edit/School";

export class Education extends React.Component {
    render() {
        return (
            <div className="flex flex-col gap-2">
                <h1>Education</h1>
                {
                    this.props.education.schools.map((school, index) => {
                        return (
                            <School
                                key={index} 
                                onChange={(e) => this.props.onChange(e, index)}
                                onClick={() => this.props.deleteOnClick(index)}
                            />
                        )
                    })
                }
                <button 
                    className="bg-green-500 rounded-md"
                    onClick={() => this.props.addOnClick()}
                >Add</button>
            </div>
        );
    }
}