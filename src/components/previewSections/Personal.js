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
                            <p>{firstName.trim() === "" ?
                                "First Name" :
                                firstName}</p>
                            <p>{lastName.trim() === "" ?
                                "Last Name" :
                                lastName}</p>
                            
                        </div>
                        <p className="text-base">
                            {role.trim() === "" ?
                                "Role" :
                                role}
                        </p>
                    </div>
                    <div className="text-base">
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faAt}
                            />
                            <p>{email.trim() === "" ?
                                "Email" :
                                email}</p>
                        </div>
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faLocationDot}
                            />
                            <p>{address.trim() === "" ?
                                "Address" :
                                address}</p>
                        </div>
                        <div 
                            className="flex gap-1 content-center"
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
                            />
                            <p>{phoneNumber.trim() === "" ?
                                "Phone Number" :
                                phoneNumber}</p>
                        </div>
                    </div>
                </div> 
                <hr className="h-1  mt-2 mb-2 bg-sky-500 dark:bg-emerald-500 text-sky-500 dark:text-emerald-500 border-none rounded-md"></hr>
                <p>{description.trim() === "" ?
                    "Description" :
                    description}</p>
            </div>      
            
        );
    }
}