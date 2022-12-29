import React from "react";
import { Button } from "../utility/Button";
import { Career } from "../utility/Career.js";

export class Experience extends React.Component {
    renderWork(index) {
        return (
            <Career />
        )
    }

    render() {
        return (
            <div className="flex flex-col gap-2">
                <h1>Work Experience</h1>
                <Career onChange={this.props.onChange}/>
                <Button 
                    className="bg-green-500 rounded-md"
                    value="Add" 
                />
            </div>
        );
    }
}