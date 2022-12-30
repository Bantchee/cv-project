import React from "react";
import { School } from "../utility/edit/School";
import { Button } from "../utility/Button";

export class Education extends React.Component {
    render() {
        return (
            <div className="flex flex-col gap-2">
                <h1>Education</h1>
                <School 
                    onChange={(e) => this.props.onChange(e, 0)}
                />
                <Button 
                    className="bg-green-500 rounded-md"
                    value="Add" 
                />
            </div>
        );
    }
}