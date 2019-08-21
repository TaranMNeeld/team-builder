import React, { useState } from 'react';
import './App.css';
import TeamMembersList from "./components/TeamMembersList";
import Form from "./components/Form";

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const addNewMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <TeamMembersList teamMembersList={teamMembers} />
    </div>
  );
}

export default App;
