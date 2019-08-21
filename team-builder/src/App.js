import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TeamList from "./components/TeamMembersList";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const addNewMember = member => {
    setTeamMembers([...teamMembers, member]);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <TeamList teamList={teamMembers} />
    </div>
  );
}

export default App;
