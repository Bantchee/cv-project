import React from 'react';
import { Input } from '../utility/Input';
import { TextArea } from '../utility/TextArea';

export const Personal = (props) => {
    return (
        <div>
            <h1>Personal Information</h1>
            <div className="flex flex-col gap-2 dark:text-zinc-900">
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value = {props.personal.firstName}
                />
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value = {props.personal.lastName}
                />
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="text"
                    name="role"
                    placeholder="Role"
                    value = {props.personal.role}
                />
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value = {props.personal.email}
                />
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="text"
                    name="address"
                    placeholder="Address"
                    value = {props.personal.address}
                />
                <Input
                    onChange={(e) => props.onChange(e)} 
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value = {props.personal.phoneNumber}
                />
                <TextArea 
                    onChange={(e) => props.onChange(e)} 
                    name="description"
                    placeholder="Description"
                    value = {props.personal.description}
                />
            </div>
        </div>
    )
}