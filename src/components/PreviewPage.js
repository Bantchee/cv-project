import React from "react";

export class PreviewPage extends React.Component {
    render() {
        let {firstName, lastName, role, email, address, phoneNumber, description} = this.props;
        return (        
            <div className="flex-1 p-6 bg-zinc-200 text-zinc-900 dark:bg-zinc-600 dark:text-zinc-50">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Role: {role}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Description: {description}</p>
            </div> 
        );
    }
}