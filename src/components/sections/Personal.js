import React, { Component } from 'react';
import { Input } from '../utility/Input';
import { TextArea } from '../utility/TextArea';

export class Personal extends Component {
    render() {
        return (
            <div className=" m-5 p-5">
                <h1>Personal Information</h1>
                <div className="flex flex-col gap-2">
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value = {this.props.personal.firstName}
                    />
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value = {this.props.personal.lastName}
                    />
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="text"
                        name="role"
                        placeholder="Role"
                        value = {this.props.personal.role}
                    />
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value = {this.props.personal.email}
                    />
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="text"
                        name="address"
                        placeholder="Address"
                        value = {this.props.personal.address}
                    />
                    <Input
                        onChange={(e) => this.props.onChange(e)} 
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value = {this.props.personal.phoneNumber}
                    />
                    <TextArea 
                        onChange={(e) => this.props.onChange(e)} 
                        name="description"
                        placeholder="Description"
                        value = {this.props.personal.description}
                    />
                </div>
            </div>
        )
    }
}