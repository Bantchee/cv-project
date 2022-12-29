import React from "react";
import { Button } from "../utility/Button";
import { Career } from "../utility/Career.js";

export class Experience extends React.Component {
    render() {
        return (
            <div className="flex flex-col gap-2">
                <h1>Work Experience</h1>

                {/* Temp */}
                <Career onChange={(e) => this.props.onChange(e, 0)}/>
                <Button 
                    className="bg-green-500 rounded-md"
                    value="Add" 
                />
            </div>
        );
    }
}