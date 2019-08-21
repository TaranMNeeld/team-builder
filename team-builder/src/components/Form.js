import React, { useState } from "react";

const Form = props => {

    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        //computed properties
        console.log(event.target.value);
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Name </label>
            <input
                type="text"
                name="name"
                value={member.title}
                onChange={changeHandler}
            />
            <label htmlFor="title">Email </label>
            <input
                type="text"
                name="email"
                value={member.title}
                onChange={changeHandler}
            />
            <label htmlFor="title">Role </label>
            <input
                type="text"
                name="role"
                value={member.title}
                onChange={changeHandler}
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Form;
