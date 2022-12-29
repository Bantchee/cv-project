import React from "react";

export class Personal extends React.Component {
    render() {
        let {firstName, lastName, role, email, address, phoneNumber, description} = this.props;
        return (        
            <div className="">
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