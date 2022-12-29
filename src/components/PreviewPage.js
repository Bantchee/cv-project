import React from "react";
import { Experience } from "./previewSections/Experience";
import { Personal } from "./previewSections/Personal";

export class PreviewPage extends React.Component {
    render() {
        return (        
            <div className="flex-1 flex flex-col gap-2 p-6 bg-zinc-200 text-zinc-900 dark:bg-zinc-600 dark:text-zinc-50 rounded-lg">
                <Personal 
                    firstName={this.props.personal.firstName} 
                    lastName={this.props.personal.lastName} 
                    role={this.props.personal.role} 
                    email={this.props.personal.email} 
                    address={this.props.personal.address} 
                    phoneNumber={this.props.personal.phoneNumber}
                    description={this.props.personal.description}  
                />
                <Experience
                    careers={this.props.experience.careers}
                />
            </div> 
        );
    }
}