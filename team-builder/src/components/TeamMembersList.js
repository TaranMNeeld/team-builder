import React from "react";
import "./TeamMembersList.css";

const TeamMembersList = props => {
    console.log(props);

    return (
        <div className="members">
            {props.teamMembersList.map(member => {
                return (
                    <div key={member.id} className="member">
                        <h2>Name: {member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default TeamMembersList;
