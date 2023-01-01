import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export class Personal extends React.Component {
    render() {
        let {firstName, lastName, role, email, address, phoneNumber, description} = this.props;
        return (
            <div>
                <div className="flex justify-between">
                    <div>
                        <div className="flex gap-4 text-4xl text-sky-500 dark:text-emerald-500">
                            <p>First Name: {firstName}</p>
                            <p>Last Name: {lastName}</p>
                            
                        </div>
                        <p>Role: {role}</p>
                    </div>
                    <div>
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faAt}
                            />
                            <p>Email: {email}</p>
                        </div>
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faLocationDot}
                            />
                            <p>Address: {address}</p>
                        </div>
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
                            />
                            <p>Phone Number: {phoneNumber}</p>
                        </div>
                    </div>
                </div> 
                <p>Description: {description}</p>
            </div>      
            
        );
    }
}