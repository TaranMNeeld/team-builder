import React from "react";

const TeamList = props => {
    console.log(props);
    return (
        <div>
            {props.teamList.map(member => {
                return (
                    <div key={member.id}>
                        <h2>Name: {member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default TeamList;
