import React, { Component } from 'react';
import { Input } from '../utility/Input';
import { TextArea } from '../utility/TextArea';

export class Personal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.value,
        }
    }

    onChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className=" m-5 p-5">
                <h1>Personal Information</h1>
                <div className="flex flex-col gap-2">
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                    />
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                    />
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="Role"
                        placeholder="Role"
                    />
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                    />
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="address"
                        placeholder="Adress"
                    />
                    <Input
                        onChange={(e) => this.onChange(e)} 
                        type="text"
                        name="Phone Number"
                        placeholder="Phone Number"
                    />
                    <TextArea 
                        onChange={(e) => this.onChange(e)} 
                        name="description"
                        placeholder="Description"
                    />
                </div>
            </div>
        )
    }
}