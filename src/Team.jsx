import { useState } from 'react';

export default function team() {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    // setTeam(team + 1); //? or
    const newPlayer = team + 1;
    setTeam(newPlayer);
  };
  const handleReduce = () => {
    // setTeam(team - 1); //? or
    const newPlayer = team - 1;
    setTeam(newPlayer);
  };
  const teamStyle = {
    border: '2px solid purple',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px',
  };
  return (
    <div style={teamStyle}>
      <h2>Players : {team}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
