import React, { useState } from "react";
import "./Form.css"

const Form = props => {

    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        if (member.name && member.email && member.role) {
            props.addNewMember(newMember);
        }
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm} className="form">
            <label htmlFor="title">Name </label>
            <input
                type="text"
                name="name"
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor="title">Email </label>
            <input
                type="text"
                name="email"
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor="title">Role </label>
            <input
                type="text"
                name="role"
                value={member.role}
                onChange={changeHandler}
            />
            <button type="submit" className="add-member">Add Team Member</button>
        </form>
    );
};

export default Form;
