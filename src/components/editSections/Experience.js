import React from "react";
import { Button } from "../utility/Button";
import { Career } from "../utility/edit/Career.js";

export class Experience extends React.Component {
    render() {
        return (
            <div className="flex flex-col gap-2">
                <button onClick={() => this.props.onClick(0)}>Click me</button>
                <h1>Work Experience</h1>
                {
                    this.props.experience.careers.map((career, index) => {
                        return (
                            <Career
                                key={index} 
                                onChange={(e) => this.props.onChange(e, index)}
                                onClick={() => this.props.onClick(index)}
                            />
                        )
                })
            }
                <Button 
                    className="bg-green-500 rounded-md"
                    value="Add" 
                />
            </div>
        );
    }
}